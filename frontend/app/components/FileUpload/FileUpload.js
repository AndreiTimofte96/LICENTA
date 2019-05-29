import React from 'react';
import Dropzone from 'react-dropzone';
import './style.scss';

export default class FileUpload extends React.PureComponent {
  constructor() {
    super();
    this.dropzoneRef = null;
  }


  render() {
    const {
      file, accept, maxFileSize,
    } = this.props;
    return (
      <div className="file-upload">
        <Dropzone
          onDrop={(filesAccepted, filesRejected) => this.props.onDrop(filesAccepted, filesRejected)}
          disableClick
          ref={(ref) => { this.dropzoneRef = ref; }}
          accept={accept}
          multiple={false}
          maxSize={maxFileSize}
        >
          {(() => {
            if (Object.keys(file).length) {
              if (file.url) {
                return (
                  <div className="img d-flex justify-content-center align-items-center">
                    <img src={file.url} alt="url" />
                  </div>
                );
              }
            }
            return null;
          })
          }
        </Dropzone>
        <button type="button" className="mt-4 mr-2 btn btn-primary" onClick={() => { this.dropzoneRef.open(); }}>
          Schimba poza
        </button>
      </div >
    );
  }
}
