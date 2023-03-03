import { mergeClasses } from '@material-ui/styles'
import axios from 'axios'
import React from 'react'
import useStyles from '../../styles/picturePage/picturePage'

const PicturePage = ({orderDataPicture}) => {
    let relativeImageUrl = "http://localhost:5000/images" + orderDataPicture.directory
    console.log("relative image url: ", relativeImageUrl)

    //download function
      
    async function download() {
        axios({
            url: "http://localhost:5000/imagedownload",
            method:'POST',
            responseType: 'blob',
            data: { pictureUrl: orderDataPicture.directory }
    })
    .then((response) => {
           const url = window.URL
           .createObjectURL(new Blob([response.data]));
                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', orderDataPicture.name + ".jpg");
                  document.body.appendChild(link);
                  link.click();
    })
    }
    


    const classes = useStyles();

    return (
        <section className={classes.picturePage}>
            <h2 className={classes.pictureName}>{orderDataPicture.name}</h2>
            <img className={classes.picture} src={relativeImageUrl} alt="Orders Image."/>
            <br/>
            <div className={classes.button}>
                {/*<a target="_blank" href={relativeImageUrl} download={orderDataPicture.name} className={classes.button1}>Download</a>*/}
                <a className={classes.button1} onClick={() => {download()}}>Download</a>
            </div>
        </section>
  )
}

export default PicturePage