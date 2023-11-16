export class Player {
    userID: any;
    // username
    userName: string;
    // online/offline status
    online: boolean;
    // status: if available for play or already playing
    status: string;

    constructor(
        userID: any,
        userName: string,
        online: boolean,
        status?: string | "",
    ) {
        this.userID = userID;
        this.userName = userName;
        this.online = online;
        this.status = this.online === true ? "Available" : "Not available";
    }

}