import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ManagersService {

	baseUrl = 'http://localhost:3000';



  constructor(private http: Http) { }

	getAllManagers() {
		return this.http.get(`${this.baseUrl}/api/managers`);
	}

	getOneManager(managerId) {
		console.log(managerId);
		return this.http.get(`${this.baseUrl}/api/managers/${managerId}`);
	}

	createManager(manager) {
		return this.http.post(`${this.baseUrl}/api/managers`, manager);
	}

	deleteManager(manager) {
		console.log(manager._id);
		return this.http.delete(`${this.baseUrl}/api/managers/${manager._id}`);
	}

	updateManager(updatedManager) {
		return this.http.put(`${this.baseUrl}/api/managers/${updatedManager._id}`, updatedManager);
	}

}
