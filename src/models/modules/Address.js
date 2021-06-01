import Model from "./Model";
import { is, merge } from "./../../helpers";
import { NotAStringException, InvalidEnumException } from "../../exceptions";
import { PrivacyEnum } from "../../enums";

class Address extends Model {
  constructor(input) {
    let params = {
      title: "",
      country: "",
      state: "",
      city: "",
      neighborhood: "",
      postal_code: "",
      street: "",
      number: "",
      complement: "",
      privacy: PrivacyEnum.PRIVATE,
    };

    super(merge(params, input));
  }

  set_title(title) {
    if (is(title).notAString()) {
      throw new NotAStringException(title);
    }
    this.attributes.title = title;
  }

  set_country(country) {
    if (is(country).notAString()) {
      throw new NotAStringException(country);
    }
    this.attributes.country = country;
  }

  set_state(state) {
    if (is(state).notAString()) {
      throw new NotAStringException(state);
    }
    this.attributes.state = state;
  }

  set_city(city) {
    if (is(city).notAString()) {
      throw new NotAStringException(city);
    }
    this.attributes.city = city;
  }

  set_neighborhood(neighborhood) {
    if (is(neighborhood).notAString()) {
      throw new NotAStringException(neighborhood);
    }
    this.attributes.neighborhood = neighborhood;
  }

  set_postal_code(postal_code) {
    let isPostalCode = is(postal_code);
    if (isPostalCode.notAString() && isPostalCode.notANumber()) {
      throw new NotAStringException(postal_code);
    }
    this.attributes.postal_code = `${postal_code}`;
  }

  set_street(street) {
    if (is(street).notAString()) {
      throw new NotAStringException(street);
    }
    this.attributes.street = street;
  }

  set_privacy(privacy) {
    if (!PrivacyEnum.includes(privacy)) {
      throw new InvalidEnumException(privacy, `PrivacyEnum`);
    }
    this.attributes.privacy = privacy;
  }

  isPublic() {
    return this.privacy === PrivacyEnum.PUBLIC;
  }
}

export default Address;
