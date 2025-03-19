import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albums: Album[] = []; 

  constructor(private http: HttpClient) {}

 
  getAlbums(): Observable<Album[]> {
    if (this.albums.length) {
      return of(this.albums); 
    }
    return this.http.get<Album[]>(this.apiUrl).pipe(
      map((data) => {
        this.albums = data; 
        return data;
      })
    );
  }

  getAlbum(id: number): Observable<Album> {
    const album = this.albums.find(a => a.id === id);
    if (album) {
      return of(album);
    }
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  createAlbum(data: { userId: number; title: string }): Observable<Album> {
   
    const maxId = this.albums.length ? Math.max(...this.albums.map(a => a.id)) : 0;
    const tempAlbum: Album = {
      id: maxId + 1,
      userId: data.userId,
      title: data.title
    };
  
    return of(tempAlbum); 
  }


  deleteAlbum(id: number): Observable<void> {
    this.albums = this.albums.filter(a => a.id !== id); 
    return of(undefined);
  }

  
  updateAlbum(id: number, newTitle: string): Observable<Album> {
    const album = this.albums.find(a => a.id === id);
    if (album) {
      album.title = newTitle; 
    }
    return of({ ...album! }); 
  }


  getPhotosByAlbum(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
}