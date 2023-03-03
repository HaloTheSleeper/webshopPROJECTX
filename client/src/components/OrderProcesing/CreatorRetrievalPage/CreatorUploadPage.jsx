import { mergeClasses } from '@material-ui/styles';
import React from 'react'
import UploadItem from './UploadItem/UploadItem';
import useStyles from '../styles/creatorUploadPage/creatorUploadPage'

const CreatorUploadPage = ({picturesToUpload, resetPicturesToUpload}) => {
  const classes = useStyles();
  
  
  return (
    <div className={classes.wholeShit}>
      <h1>Please upload the required content.</h1>
      {picturesToUpload.map((pictureToUpload) => (
        <UploadItem pictureToUpload={pictureToUpload} resetPicturesToUpload={resetPicturesToUpload}/>
      ))}
    </div>
  )
}

export default CreatorUploadPage;