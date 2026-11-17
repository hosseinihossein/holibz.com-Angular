import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { NewLibrary_ResultModel } from '../shared/dialogs/new-library-form/new-library-form';

@Service()
export class ShelfService {
    private readonly httpClient = inject(HttpClient);

    readonly GetShelfCardInfo_Url = "/api/Shelf/GetShelfCardInfo?shelfId=";
    readonly GetShelfIdsOfLib_Url = "/api/Shelf/GetShelfIdsOfLibrary?libId=";

    constructor() { }

    submitNewShelf(model: NewLibrary_ResultModel) {
        let formData = new FormData();
        formData.append("Title", model.title)
        if (model.description) {
            formData.append("Description", model.description)
        }
        if (model.image) {
            formData.append("Image", model.image);
        }

        return this.httpClient.post<{ success: boolean }>("/api/Shelf/SubmitNewShelf", formData);
    }
}
