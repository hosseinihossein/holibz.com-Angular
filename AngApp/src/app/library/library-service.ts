import { inject, Service } from '@angular/core';
import { NewLibrary_ResultModel } from '../shared/dialogs/new-library-form/new-library-form';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

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

}

