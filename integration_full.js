import EditorSDK from '@chili-publish/editor-sdk';

let played = false;
//Initialize SDK.
const SDK = new EditorSDK({
    onStateChanged: (state) => {
      onLayoutsChanged(state.layouts, state.selectedLayoutId);
      if(played == false) {
        playAnimation();
      }
      played = true;
    },
    onSelectedFrameLayoutChanged: (selectedFrameLayout) => {
      onFrameLayoutChange(selectedFrameLayout);
    },
    onSelectedFrameContentChanged: (selectedFrameContent) => {
      onFrameContentChange(selectedFrameContent);
    },
    onSelectedToolChanged: (tool) => {
      onToolChanged(tool);
    },
    onVariableListChanged: (variableList) => {
      onVariableValueChanged(variableList);
    },
    editorId: "chili-editor",
  });

//Initialise Editor
SDK.loadEditor();

window.SDK = SDK;

// Get document state / JSON
window.getDocumentState = async () => {
  const docjson = (await SDK.document.getCurrentDocumentState()).parsedData;
  console.log(docjson);
};

// Tool selection and change
  window.useSelectTool = () => {
    SDK.tool.setSelectTool();
  };
  
  window.useHandTool = () => {
    SDK.tool.setHandTool();
  };
  
  window.useZoomTool = () => {
    SDK.tool.setZoomTool();
  };

  const onToolChanged = (tool) => {
    if (tool) {
      const toolLabel = document.getElementById("toolLabel");
      toolLabel.textContent = "Selected tool: " + tool;
    }
  };


// Play animtion
  window.playAnimation = async () => {
    SDK.animation.playAnimation();
  };

  // Functions on frame selection
  const onFrameContentChange = (selectedFrameContent) => {
    if (selectedFrameContent) {
      const frameTitleInput = document.getElementById("frameTitle");
      frameTitleInput.setAttribute("value", selectedFrameContent.frameName);
  
      const frameTypeInput = document.getElementById("frameType");
      frameTypeInput.setAttribute("value", selectedFrameContent.frameType);
    }
  };
  const onFrameLayoutChange = (selectedFrameLayout) => {
    if (selectedFrameLayout) {
      const frameXInput = document.getElementById("frameX");
      frameXInput.setAttribute("value", selectedFrameLayout.x.value);
      frameXInput.setAttribute("onclick", "setFrameProperty('"+selectedFrameLayout.frameId+"',this.value,'x')");
  
      const frameYInput = document.getElementById("frameY");
      frameYInput.setAttribute("value", selectedFrameLayout.y.value);
      frameYInput.setAttribute("onclick", "setFrameProperty('"+selectedFrameLayout.frameId+"',this.value,'y')");
  
      const frameWidthInput = document.getElementById("frameWidth");
      frameWidthInput.setAttribute("value", selectedFrameLayout.width.value);
      frameWidthInput.setAttribute("onclick", "setFrameProperty('"+selectedFrameLayout.frameId+"',this.value,'width')");
  
      const frameHeightInput = document.getElementById("frameHeight");
      frameHeightInput.setAttribute("value", selectedFrameLayout.height.value);
      frameHeightInput.setAttribute("onclick", "setFrameProperty('"+selectedFrameLayout.frameId+"',this.value,'height')");
    }
  };

  window.setFrameProperty = async (frameid, value, property) => {
    switch(property) {
      case 'x':
        const newx = await SDK.frame.setFrameX(frameid,value).parsedData;
        break;
      case 'y':
        SDK.frame.setFrameY(frameid,value);
        break;
      case 'width':
        SDK.frame.setFrameWidth(frameid,value);
        break;
      case 'height':
        SDK.frame.setFrameHeight(frameid, value);
        break;
      default:
        console.log('Incorrect property passed')
    }
  };

  // Add Frame and assign image from url
window.addFrame = async () => {
  let newFrameID =  (await SDK.frame.addFrame('image', 10,10,150,150)).parsedData;
  SDK.frame.setFrameName(newFrameID,'NewImageFrame');
  const img = await SDK.frame.setImageFromUrl(newFrameID,'http://localhost/hovawart.jpg');
};

// Function on when a layout has been changed
const onLayoutsChanged = (layouts, selectedLayout) => {
  if (layouts && layouts.length) {
    const listContainer = document.getElementById("layoutList");
    // Empty list on rerender
    listContainer.innerHTML = "";

    // loop all layouts and render them + add dynamic onClick handler
    layouts.map((layout) => {
      const item = document.createElement("li");
      item.setAttribute("class", "layout-item");
      item.setAttribute("id", layout.layoutId);
      if (layout.layoutId === selectedLayout) {
        item.classList = `${item.classList} selected`;
      }
      item.setAttribute("onclick", `onLayoutClick(${layout.layoutId})`);
      const itemText = document.createTextNode(layout.layoutName);
      item.appendChild(itemText);
      listContainer.appendChild(item);
    });
  }
};

    // Select a layout
    window.onLayoutClick = (id) => {
      SDK.layout.selectLayout(String(id));
    };
  
  // function to list all text variables
  const onVariableValueChanged = (variableList) => {
    if (variableList && variableList.length) {
      varContainer =document.getElementById('variableList');
      varContainer.innerHTML = '';
      // loop all variables and render them + add dynamic onClick handler
      variableList.map((variable) => {
        if (variable.type =='shorttext') {
          const label = document.createElement("label");
          label.setAttribute("for", variable.id);
          label.innerHTML=variable.name+": ";
          varContainer.appendChild(label);
          
          const item = document.createElement("input");
          item.setAttribute("id", variable.id);
          item.setAttribute("name", variable.name);
          item.setAttribute("value",variable.value);
          item.setAttribute("type", variable.type);
          item.setAttribute("label", variable.name);
          item.setAttribute("onchange","setVariableValue('"+variable.id+"',this.value)");
          varContainer.appendChild(item);
        }
      });
      }
    else {
      console.log("variables is empty");
    }
  };

  window.setVariableValue = async (varid, value) => {
    await SDK.variable.setVariableValue(varid, value);
  };

  // Toggle Debug panel
  window.toggleDebug = async () => {
    const debug = await SDK.debug.toggleDebugPanel();
    console.log(debug);
  };
