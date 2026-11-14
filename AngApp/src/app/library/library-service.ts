import { inject, Service } from '@angular/core';
import { NewLibrary_ResultModel } from '../shared/dialogs/new-library-form/new-library-form';
import { HttpClient, HttpParams } from '@angular/common/http';

@Service()
export class LibraryService {
    private readonly httpClient = inject(HttpClient);

    readonly libraryCardInfo_Url = "/api/library/GetLibraryCardInfo?libId=";
    readonly getLibraryIds_Url = "/api/Library/GetLibraryIds?userId=";

    constructor() { }

    submitNewLibrary(model: NewLibrary_ResultModel) {
        let formData = new FormData();
        formData.append("Title", model.title)
        if (model.description) {
            formData.append("Description", model.description)
        }
        if (model.image) {
            formData.append("Image", model.image);
        }

        return this.httpClient.post<{ success: boolean }>("/api/Library/SubmitNewLibrary", formData);
    }

    submitImage(image: File, libId: string) {
        const formData = new FormData();
        formData.append('imageFile', image);
        formData.append('libraryId', libId);
        return this.httpClient.post<{ success: boolean }>(
            "/api/Library/SubmitImage", formData
        );
    }

    deleteImage(libId: string) {
        const httpParams = new HttpParams().append('libraryId', libId);
        return this.httpClient.delete<{ success: boolean }>(
            "/api/Library/DeleteImage", { params: httpParams }
        );
    }

    submitTitle(title: string, libId: string) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("libraryId", libId);
        return this.httpClient.post<{ success: boolean }>(
            `/api/Library/SubmitTitle`, formData
        );
    }

    submitDescription(description: string, libId: string) {
        const formData = new FormData();
        formData.append("description", description);
        formData.append("libraryId", libId);
        return this.httpClient.post<{ success: boolean }>(
            `/api/Library/SubmitDescription`, formData
        );
    }

}

