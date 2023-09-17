import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { FolderServiceService } from 'src/app/services/folder-service.service';

@Component({
  selector: 'app-main-dir',
  templateUrl: './main-dir.component.html',
  styleUrls: ['./main-dir.component.css']
})
export class MainDirComponent implements OnInit {
  folders: Folder[] = [];

  constructor(private folderService: FolderServiceService) { }

  ngOnInit(): void {
    this.loadFolders();
  }

  private loadFolders(): void {
    this.folderService.getFolders().subscribe(
      folders => this.folders = folders,
      error => console.error('Error loading folders: ', error)
    );
  }
}
