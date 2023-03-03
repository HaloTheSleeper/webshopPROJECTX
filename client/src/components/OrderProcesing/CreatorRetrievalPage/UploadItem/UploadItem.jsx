import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/styles';
import useStyles from '../../styles/uploadItem/uploadItem'

const styles = () => ({
  bigWindow: {
    borderBottom: "2px solid #2aabdf",
    borderRadius: "2px",
    marginLeft: "calc(18vw - 25px)",
    marginRight: "calc(18vw - 25px)",
    paddingTop: "4vh",
    "& h2": {
      color: "white",
      fontSize: "calc(20px + 1vw)",
      fontWeight: 800
    }
  },
  smallWindow1: {
    "& a": {
      color: "#2aadbf",
      fontSize: "calc(12.5px + 0.5vw)",
      fontWeight: 700
    },
    "& img": {
      maxWidth: "calc(175px + 20vw)",
      marginTop: "2vh",
      marginBottom: "4vh"
    }
  },
  smallWindow2: {
    "& a": {
      color: "white",
    }
  },
  insertWindow: {
    color: "white",
    marginTop: "3vh",
    marginBottom: "5vh",
    "& input": {
      display: "none"
    },
    /*"& label": {
      textDecoration: "none",
      height: "calc(20px + 0.75vw)",
      width: "calc(50px + 1.5vw)",
      backgroundColor: "#2aabdf",
      fontSize: "calc(13px + 0.5vw)",
      color: "white",
      textAlign: "center",
      margin: "10px",
      borderRadius: "10px",
      fontWeight: "700",
      padding: "5px",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation",
      transition: "all .3s",
      "&:hover": {
        backgroundColor: "black",
        border: "2px solid #2aabdf",
      }
    },*/
    "& a": {
      textDecoration: "none",
      borderRadius: "3px",
      height: "calc(27px + 1vw)",
      width: "calc(65px + 2.5vw)",
      backgroundColor: "#2aabdf",
      fontSize: "calc(15px + 1vw)",
      color: "white",
      textAlign: "center",
      margin: "10px",
      fontWeight: "700",
      padding: "5px",
      userSelect: "none",
      WebkitUserSelect: "none",
      touchAction: "manipulation",
      transition: "all .3s",
      "&:hover": {
        backgroundColor: "black",
        border: "2px solid #2aabdf",
      },  
    }
  },
})

class UploadItem extends Component {
  state = {
    selectedFile: null
  };


  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  };

  fileUploadHander = async() => {
    const fd = new FormData();
    let fileName = this.props.pictureToUpload.name + "-" + this.state.selectedFile.name;
    fd.append('image', this.state.selectedFile, /*this.state.selectedFile.name*/fileName);
    fd.append('imageName', this.props.pictureToUpload.name)
    console.log(fd);
    try {
      let response = await axios.post('http://localhost:5000/imageupload', fd);
      if (response.data.success) {
        this.props.resetPicturesToUpload(response.data.newData);
      } else {
        alert("Failed to upload the picture.")
      }
      //console.log(response.data);
    } catch(err) {
      console.log(err);
    }
  }
  
  UploadButton = () => {

    const { classes } = this.props;
    
    return(
      <div className={classes.smallWindow2}>
        <a style={{color: "#999999"}}>Please upload the image required</a>
        <div className={classes.insertWindow}>
          <input type="file" id="files" onChange={this.fileSelectedHandler}/>
          <a><label for="files" style={{marginBottom: "3vh"}}>Select file</label></a>
          <a className={classes.button1} onClick={this.fileUploadHander}>Upload</a>
        </div> 
      </div>
    )
  }

  Uploaded = () => {
    let pictureUrl = "http://localhost:5000/images" + this.props.pictureToUpload.directory;

    console.log(pictureUrl)

    const {classes} = this.props
  
    return (
      <div className={classes.smallWindow1}>
        <a>Uploaded!</a>
        <br/>
        <img /*src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"*/
        src={pictureUrl}/>
      </div>
    )
    
   
    
    /*try {
      let dataToSend = {directoryOfPicture: this.props.pictureToUpload.directory}
      const options2 = { method: 'POST', 
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify(dataToSend)};
      console.log("Sending: ", dataToSend)
		  const response2 = await fetch('http://localhost:5000/imagetocreator', options2);
		  const data2 = await response2.json();
		  console.log("Got: ", data2);
      return(
        <div>
          <h2>The file has been uploaded! Made a request!</h2>
          <a>{dataToSend.directoryOfPicture}</a>
        </div>
      )
    } catch(err) {
      return(
        <div>
          <h2>The file has been uploaded! No Request!</h2>
        </div>
      )
    }*/
  }
 
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.bigWindow}>
        <h2>{this.props.pictureToUpload.name}</h2>
        <br/>
        {this.props.pictureToUpload.uploaded ? <this.Uploaded/> : <this.UploadButton/>}
      </div>
    )
  }

}

export default withStyles(styles)(UploadItem);
