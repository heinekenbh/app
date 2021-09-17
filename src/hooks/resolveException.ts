import { Alert } from 'react-native'

const resolveException = (err: Error): void => {
  console.error(err)
  Alert.alert('Atenção', err.message)
}

export default resolveException
