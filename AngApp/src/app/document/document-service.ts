import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { NewLibrary_ResultModel } from '../shared/dialogs/new-library-form/new-library-form';

@Service()
export class DocumentService {
    private readonly httpClient = inject(HttpClient);

    readonly GetDocIdsOfShelf_Url = "/api/Document/GetDocIdsOfShelf?shelfId=";
    readonly GetDocMiniCardInfo_Url = "/api/Document/GetDocMiniCardInfo?docId="
    readonly GetDocCardInfo_Url = "/api/Document/GetDocCardInfo?docId="

    constructor() { }

    submitNewDocument(model: { newDocumentModel: NewLibrary_ResultModel, parentShelfId: string }) {
        let formData = new FormData();
        formData.append("Title", model.newDocumentModel.title);
        formData.append("ParentShelfId", model.parentShelfId);
        if (model.newDocumentModel.description) {
            formData.append("Description", model.newDocumentModel.description);
        }
        if (model.newDocumentModel.image) {
            formData.append("Image", model.newDocumentModel.image);
        }

        return this.httpClient.post<{ success: boolean }>("/api/Document/SubmitNewDocument", formData);
    }
}
