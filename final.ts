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

// type RequiredStudent = Required<Student>;
type RequiredStudent<T> = {
  [K in keyof T]-?: T[K];
};

namespace Util {
  export function concatKeysAndValues(obj: {
    [key: string]: string | Record<string, string>;
  }): string {
    let result: string = "";
    for (let key in obj) {
      result += key + ": " + obj[key] + ", ";
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
