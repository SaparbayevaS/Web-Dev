import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumsService, Album } from '../services/albums.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolver implements Resolve<Album[]> {
  constructor(private albumsService: AlbumsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album[]> {
   
    return this.albumsService.getAlbums();
  }
}