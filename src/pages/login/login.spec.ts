/**
 * Created by Yosh on 7/8/2017.
 */
import {ComponentFixture, async, inject} from '@angular/core/testing';
import { Login }          from './login';
import {User} from "../../providers/user";

let fixture: ComponentFixture<Login> = null;
let instance: any = null;

class UserMock {
   usersObj = [{
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
  ]
};

describe('Pages: Login page', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([Login]).then(compiled => {
    providers : [
      {provide: User, useClass: UserMock}
    ]
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the Login ionic page', async(() => {
    expect(instance).toBeTruthy();
  }));

  it ('should have one login page', () => {
    expect(instance.pages.length).toBe(1);
  });

  it('initialises with a title of My Page', () => {
    expect(instance['title']).toEqual('Car Wash App');
  });

  it('should call the User Service',
    inject([UserMock], (userServiceMock) => {
      expect(userServiceMock).toBeDefined();
      expect(userServiceMock.validLogin.toHaveBeenCalled());
    }));

});
