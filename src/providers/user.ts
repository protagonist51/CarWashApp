/**
 * Created by Yosh on 7/8/2017.
 */

import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Users} from "../mocks/providers/user";
import {IUser} from "../models/user";


@Injectable()
export class User {

  private _user:Observable<IUser>;

  constructor(public http: Http, private iUser: Users) {
    this._user =  Observable.from(iUser.users)

  }

  /*
  * Method to check the validity of the user credentials
  * Returns true if the user credentials exists and false otherswise
  * */
  public validLogin(accountInfo: IUser): boolean {
    if(
      this._user.find((user:IUser) => user.username == accountInfo.username && user.password == accountInfo.password)){
      return true;
    }else return false;

  }
}

