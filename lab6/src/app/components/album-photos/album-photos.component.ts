import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumId!: number;
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.albumId = Number(params.get('id'));
  
      this.albumsService.getPhotosByAlbum(this.albumId)
        .subscribe({
          next: (data: any[]) => {
            
            this.photos = data.map(photo => ({ ...photo, loaded: false }));
          },
          error: (err) => {
            console.error('Error:', err);
          }
        });
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}