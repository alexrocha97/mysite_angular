import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient} from "@angular/common/http";

@Injectable(
    {
        providedIn: "root"
    }
)

export class LoginService
{

    constructor(private httpClient: HttpClient)
    {

    }
    private readonly baseURL = environment["endPoint"];

    LoginUsuario(obj: any)
    {
        return this.httpClient.post<any>(`${this.baseURL}/CreateTokenIdentity`, obj);
    }
}
