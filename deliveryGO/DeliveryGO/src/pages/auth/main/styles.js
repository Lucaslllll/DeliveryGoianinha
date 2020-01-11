import {StyleSheet} from 'react-native';

colorTheme = '#e3672b';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },

  titleLogin: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  containerButton: {
    width: '96%',
    marginTop: 32,
  },

  buttonStyle: {
    backgroundColor: colorTheme,
    borderRadius: 0,
  },

  titleButton: {
    textTransform: 'uppercase',
  },
  forget: {
    color: 'grey',
    fontSize: 15,
    marginTop: 7,
    textAlign: 'center',
  },
  buttonSocial: {
    marginTop: 70,
    width: '100%',
  },
  buttonSocialGoogle: {
    marginTop: 10,
    width: '100%',
  },
  wallpaper: {
    height: '100%',
    width: '100%'
  }
});

export default styles;
