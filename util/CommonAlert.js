import {Alert} from 'react-native'

const CommonAlert = {
    showSingleBtnAlert(title,message,buttonTitle) {
        Alert.alert(
            title,
            message,
            [
              {text: buttonTitle},
            ],
            { cancelable: false }
          )
    }
}

export default CommonAlert;