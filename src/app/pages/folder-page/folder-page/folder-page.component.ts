import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Folder } from 'src/app/models/folder';
import { FolderServiceService } from 'src/app/services/folder-service.service';

@Component({
  selector: 'app-folder-page',
  templateUrl: './folder-page.component.html',
  styleUrls: ['./folder-page.component.css']
})
export class FolderPageComponent implements OnInit {
  folderId?: number;
  folder?: Folder;
  children: Folder[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private folderService: FolderServiceService
  ) { }

  ngOnInit(): void {
    const folderId = this.route.snapshot.params['id'];
    this.folderService.getFolderById(folderId).subscribe({
      next: (folder) => {
        this.folder = folder;
        if (!this.folder) {
          this.router.navigate(['/']);
        }
        if (this.folder) {
          this.folderService.getChildren(folderId).subscribe({
            next: (children) => {
              this.children = children;
            },
            error: (error) => {
              console.log(error);
            }
          });
        }
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/']);
      }
    });
  }

  goBack(id: number): void {
    this.router.navigate(['/folder', id]);
  }

  goForward(id: number): void {
    this.router.navigate(['/folder', id]);
  }

  goToMainDirectory(): void {
    this.router.navigate(['/']);
  }
}
