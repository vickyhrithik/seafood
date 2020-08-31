import { Fonts } from "../../util/Fonts";
import {Colors} from "../../util/Color"
import { StyleSheet } from 'react-native';
const Commonutil = {
    objToQueryParam(obj, prefix) {
      let str = [],
        p;
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          let k = prefix ? prefix + "[" + p + "]" : p,
            v = obj[p];
          str.push(
            v !== null && typeof v === "object"
              ? this.objToQueryParam(v, k)
              : encodeURIComponent(k) + "=" + encodeURIComponent(v)
          );
        }
      }
      return str.join("&");
    },
    emailValidation(emailId) {
      var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(emailId)) {
        return false;
      } else {
        return true;
      }
    }
  };

  export const CommonStyles = StyleSheet.create({
    headerView: {
        flex: 1,
        maxHeight: 40,
        justifyContent: 'center',
    },
   

});
  
  export default Util;