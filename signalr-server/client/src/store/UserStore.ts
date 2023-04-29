import { defineStore } from "pinia";
import { IUserInfo } from "../model/IUserInfo";

export const useUserStore = defineStore("user", {
  state: () => ({
    userName: null as string | null,
    companyName: null as string | null,
    birthDate: null as Date | null,
  }),
  actions: {
    setUserInfo(userInfo: IUserInfo) {
      console.log("insstore", userInfo);
      this.userName = userInfo.userName;
      this.companyName = userInfo.companyName;
      this.birthDate = userInfo.birthDate;
    },
  },
  getters: {
    getUserName(): string | null {
      return this.userName;
    },
    getCompanyName(): string | null {
      return this.companyName;
    },
    getBirthDate(): Date | null {
      return this.birthDate;
    },
  },
});
