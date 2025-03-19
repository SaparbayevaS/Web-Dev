import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbumTitle: string = '';
  newAlbumUserId: number = 1;
  isLoading: boolean = true;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums() {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false;
      }
    });
  }

  createAlbum() {
    if (!this.newAlbumTitle.trim()) {
      alert('Write album name');
      return;
    }
  
    const currentTitle = this.newAlbumTitle;
    this.newAlbumTitle = '';
  
    this.albumsService.createAlbum({ userId: this.newAlbumUserId, title: currentTitle })
      .subscribe({
        next: (newAlbum) => {
          this.albums.push(newAlbum); 
          alert('Album created');
        },
        error: (err) => {
          alert('Error');
          console.error(err);
        }
      });
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
        alert('Album deleted');
      },
      error: (err) => {
        alert('Error');
        console.error(err);
      }
    });
  }

  updateAlbum(id: number, newTitle: string) {
    this.albumsService.updateAlbum(id, newTitle).subscribe({
      next: (updatedAlbum) => {
        const index = this.albums.findIndex(a => a.id === id);
        if (index !== -1) {
          this.albums[index] = updatedAlbum; // Обновляем локально
        }
        alert('Album updated');
      },
      error: (err) => {
        alert('Error');
        console.error(err);
      }
    });
  }
}