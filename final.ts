type Student = {
  name?: string;
  age?: number;
  email?: string;
  city?: string;
  state?: string;
};

type Teacher = {
  name: string;
  subject: string;
  phoneNo: number;
  city: string;
  state: string;
};

type RequiredStudent = Required<Student>;

namespace Util {
  export function concatKeysAndValues(obj: {
    [key: string]: string | Record<string, string>;
  }): string {
    let result: string = "";
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          result += concatKeysAndValues(obj[key] as { [key: string]: string });
        } else {
          result += key + ": " + obj[key] + ", ";
        }
      }
    }
    return result;
  }
}

const Data: { [key: string]: string | Record<string, string> } = {
  name: "Anjali",
  email: "anjali@123",
  city: "Telangana",
  state: "Telangana",
};

console.log(Util.concatKeysAndValues(Data));
