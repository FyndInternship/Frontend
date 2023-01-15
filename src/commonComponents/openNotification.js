import router from '@/Routes';
import store from '@/Store';
import {notification} from 'ant-design-vue'
const openErrorNotification = ({err, place}) => {
    if (err.response)
    {
        if (err.response.status === 401)
        {
            notification.open({
                message: 'Authentication Error',
                description:'Please log in',
              });
              store.dispatch('logout')

              setTimeout(() => {
              router.push('/signin')

              }, 1000);
        }
        else {
            notification.open({
                message: `Error from ${place}`,
                description: err.response.data.message,
              });

        }
    }
    else if (err.request)
    {
        notification.open({
            message: 'Network Error from' + place,
            description:'Please check your internet connection',
          });
    }
   else
   {
    notification.open({
        message: `Error from ${place} `,
        description:'Something went wrong , please try again later ',
      });
   }

}
const openNormalNotification = (msg) => {
    notification.open({
        message: msg
    })
}

export default openErrorNotification
export {
    openNormalNotification
}