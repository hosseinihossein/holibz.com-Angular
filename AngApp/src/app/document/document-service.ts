import { Service } from '@angular/core';

@Service()
export class DocumentService {
    readonly GetDocIdsOfShelf_Url = "/api/Document/GetDocIdsOfShelf?shelfId=";
    readonly GetDocMiniCardInfo_Url = "/api/Document/GetDocMiniCardInfo?docId="
}
