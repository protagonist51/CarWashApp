/**
 * Created by Yosh on 7/8/2017.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {IUser} from "../../models/user";


/*
* Mocking the user credentials
* */
@Injectable()
export class Users {
  public users: IUser[] = [];

  constructor() {
    let usersObj = [
      {
        "username": "protagonist",
        "password": "hello123"
      },
      {
        "username": "rono67",
        "password": "!@vioped"
      },
      {
        "username": "donaldtrump",
        "password": "melenia@34"
      },
      {
        "username": "obama51",
        "password": "lalala&56"
      },
      {
        "username": "mrbean7",
        "password": "ITvert@34"
      }
    ];

    for (let user of usersObj) {
      this.users.push(user);
    }
  }
}



