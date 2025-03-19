import { TestBed } from '@angular/core/testing';
import { AlbumsResolver } from './album.resolver';
import { AlbumsService } from '../services/albums.service';
import { of } from 'rxjs';

describe('AlbumsResolver', () => {
  let resolver: AlbumsResolver;
  let albumsServiceSpy: jasmine.SpyObj<AlbumsService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AlbumsService', ['getAlbums']);

    TestBed.configureTestingModule({
      providers: [
        AlbumsResolver,
        { provide: AlbumsService, useValue: spy }
      ]
    });

    resolver = TestBed.inject(AlbumsResolver);
    albumsServiceSpy = TestBed.inject(AlbumsService) as jasmine.SpyObj<AlbumsService>;
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should resolve albums', () => {
    albumsServiceSpy.getAlbums.and.returnValue(of([]));  // Заглушка

    resolver.resolve({} as any, {} as any).subscribe(result => {
      expect(result).toEqual([]);
      expect(albumsServiceSpy.getAlbums).toHaveBeenCalled();
    });
  });
});