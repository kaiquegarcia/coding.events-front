import { Address } from "../../../src/models";
import { PrivacyEnum } from "../../../src/enums";
import {
  InvalidEnumException,
  NotAStringException,
} from "../../../src/exceptions";

describe("Address Mutations", () => {
  it("apply public privacy", () => {
    let address = new Address();
    address.privacy = PrivacyEnum.PUBLIC;
    expect(address.isPublic().toString()).toMatch("true");
  });

  it("reject unkown privacies", () => {
    let address = new Address();
    let trial = () => {
      address.privacy = "blablabla";
    };
    expect(trial).toThrow(InvalidEnumException);
  });

  it("reject types different from string", () => {
    let address = new Address();
    let trial = () => {
      address.state = 123;
    };
    expect(trial).toThrow(NotAStringException);
  });
});
