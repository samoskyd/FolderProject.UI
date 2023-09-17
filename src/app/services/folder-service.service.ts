import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Folder } from 'src/app/models/folder';

@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {
  private apiUrl = environment.apiUrl;
  private controllerName = "Folder";

  constructor(private http: HttpClient) { }

  getFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(`${this.apiUrl}/${this.controllerName}`);
  }

  getChildren(id: number): Observable<Folder[]> {
    return this.http.get<Folder[]>(`${this.apiUrl}/${this.controllerName}/children/${id}`);
  }

  getNeighbors(id: number): Observable<Folder[]> {
    return this.http.get<Folder[]>(`${this.apiUrl}/${this.controllerName}/neighbors/${id}`);
  }

  getParent(id: number): Observable<Folder> {
    return this.http.get<Folder>(`${this.apiUrl}/${this.controllerName}/parent/${id}`);
  }

  getFolderById(id: number): Observable<Folder> {
    return this.http.get<Folder>(`${this.apiUrl}/${this.controllerName}/${id}`);
  }

  createFolder(folder: Folder): Observable<Folder> {
    return this.http.post<Folder>(`${this.apiUrl}/${this.controllerName}`, folder);
  }
}
