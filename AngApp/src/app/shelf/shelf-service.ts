import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { NewLibrary_ResultModel } from '../shared/dialogs/new-library-form/new-library-form';

@Service()
export class ShelfService {
    private readonly httpClient = inject(HttpClient);

    readonly GetShelfCardInfo_Url = "/api/Shelf/GetShelfCardInfo?shelfId=";
    readonly GetShelfIdsOfLib_Url = "/api/Shelf/GetShelfIdsOfLibrary?libId=";

    constructor() { }

    submitNewShelf(model: { newShelfModel: NewLibrary_ResultModel, parentLibId: string }) {
        let formData = new FormData();
        formData.append("Title", model.newShelfModel.title);
        formData.append("ParentLibId", model.parentLibId);
        if (model.newShelfModel.description) {
            formData.append("Description", model.newShelfModel.description);
        }
        if (model.newShelfModel.image) {
            formData.append("Image", model.newShelfModel.image);
        }

        return this.httpClient.post<{ success: boolean }>("/api/Shelf/SubmitNewShelf", formData);
    }

    submitImage(image: File, shelfId: string) {
        const formData = new FormData();
        formData.append('imageFile', image);
        formData.append('shelfId', shelfId);
        return this.httpClient.post<{ success: boolean }>(
            "/api/Shelf/SubmitImage", formData
        );
    }

    deleteImage(shelfId: string) {
        const httpParams = new HttpParams().append('shelfId', shelfId);
        return this.httpClient.delete<{ success: boolean }>(
            "/api/Shelf/DeleteImage", { params: httpParams }
        );
    }

    submitTitle(title: string, shelfId: string) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("shelfId", shelfId);
        return this.httpClient.post<{ success: boolean }>(
            `/api/Shelf/SubmitTitle`, formData
        );
    }

    submitDescription(description: string, shelfId: string) {
        const formData = new FormData();
        formData.append("description", description);
        formData.append("shelfId", shelfId);
        return this.httpClient.post<{ success: boolean }>(
            `/api/Shelf/SubmitDescription`, formData
        );
    }
}
