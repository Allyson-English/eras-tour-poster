import "./grid.css";
import React, { useRef, useState } from "react";
import Resizer from "react-image-file-resizer";
import * as htmlToImage from "html-to-image";

const smallImageHeight = 275;
const smallImageWidth = 245;

const centerImageHeight = smallImageHeight * 3.1;
const centerImageWidth = smallImageWidth * 3.1;

const resizeFileSmallGrid = (file, height, width) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      height,
      width,
      "PNG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

function GridItem({ grid_id, card_class, file, set_file, height, width }) {
  var html_for = "file-upload-" + grid_id;

  var s = {};

  // if (card_class !== "cardCenter") {
  s = {
    background: file === "" ? "" : `url("${file}") no-repeat bottom`,
  };
  // } else {
  //   s = {
  //     backgroundImage: `url("${file}")`,
  //     backgroundPosition: "50% calc(100% -3px)",
  //     backgroundRepeat: "no-repeat",
  //   };
  // }

  return (
    <div className="grid_item" id={grid_id}>
      <div className={card_class} style={s}>
        <label htmlFor={html_for} className="custom-file-upload"></label>
        <input
          id={html_for}
          type="file"
          onChange={async (e) => {
            const file = e.target.files[0];
            const image = await resizeFileSmallGrid(file, height, width);
            set_file(image);
          }}
        />
      </div>
    </div>
  );
}

function Grid() {
  const [centerFile, setCenterFile] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();
  const [file6, setFile6] = useState();
  const [file7, setFile7] = useState();
  const [file9, setFile9] = useState();
  const [file10, setFile10] = useState();
  const [file12, setFile12] = useState();

  const domEl = useRef(null);
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    const link = document.createElement("a");
    link.download = "my-eras.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <>
      <div id="how-to-use">
        <h1>Personalize Your Eras Tour Poster</h1> Click on each square below to
        add a photo and create your own Era's Tour Poster. <br /> <br /> To
        really make the poster ✨shimmer✨ use a black and white photo with no
        background. You can learn how to select the subject from an iPhone photo
        &nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          href="https://support.apple.com/guide/iphone/lift-a-subject-from-the-photo-background-iphfe4809658/ios"
        >
          here.
        </a>
        <br /> <br />
        If you're having trouble changing the photo in the correct square, try
        clicking closer to the outside edge of the square.
        <br /> <br />
        Once you're done, click the button below to download your poster.
      </div>

      <button id="my-eras-button" onClick={downloadImage}>
        Get My Eras!
      </button>

      <div className="eras-export" ref={domEl}>
        <div className="grid-container">
          <GridItem
            grid_id="cardCenter"
            card_class="cardCenter"
            file={centerFile}
            set_file={setCenterFile}
            height={centerImageHeight}
            width={centerImageWidth}
          />
          <GridItem
            grid_id="card1"
            card_class="card1"
            file={file1}
            set_file={setFile1}
            height={smallImageHeight}
            width={smallImageWidth}
          />
          <GridItem
            grid_id="card2"
            card_class="card2"
            file={file2}
            set_file={setFile2}
            height={smallImageHeight}
            width={smallImageWidth}
          />
          <GridItem
            grid_id="card3"
            card_class="card3"
            file={file3}
            set_file={setFile3}
            height={smallImageHeight}
            width={smallImageWidth}
          />
          <GridItem
            grid_id="card4"
            card_class="card4"
            file={file4}
            set_file={setFile4}
            height={smallImageHeight}
            width={smallImageWidth}
          />
          <GridItem
            grid_id="card6"
            card_class="card6"
            file={file6}
            set_file={setFile6}
            height={smallImageHeight}
            width={smallImageWidth}
          />
          <GridItem
            grid_id="card7"
            card_class="card7"
            file={file7}
            set_file={setFile7}
            height={smallImageHeight}
            width={smallImageWidth}
          />
          <GridItem
            grid_id="card9"
            card_class="card9"
            file={file9}
            set_file={setFile9}
            height={smallImageHeight}
            width={smallImageWidth}
          />
          <GridItem
            grid_id="card10"
            card_class="card10"
            file={file10}
            set_file={setFile10}
            height={smallImageHeight}
            width={smallImageWidth}
          />
          <GridItem
            grid_id="card12"
            card_class="card12"
            file={file12}
            set_file={setFile12}
            height={smallImageHeight}
            width={smallImageWidth}
          />
        </div>
      </div>
    </>
  );
}

export default Grid;
