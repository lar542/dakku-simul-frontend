import { fabric } from 'fabric';
// import {
//   setVLinePatternBrush,
//   setHLinePatternBrush,
//   setSquarePatternBrush,
//   setDiamondPatternBrush,
// } from '@/js/fabricjs/fabricPatternBrush';

const state = {
  canvas: null,
  pager: process.env.VUE_APP_API_URL + '/resources/images/free-page.png',
};

const getters = {
  getPaperType(state) {
    return state.pager;
  },
};

const mutations = {
  setCanvas(state, payload) {
    state.canvas = payload;
    if (fabric.PatternBrush) {
      state.vLinePatternBrush = new fabric.PatternBrush(state.canvas);
      state.hLinePatternBrush = new fabric.PatternBrush(state.canvas);
      state.squarePatternBrush = new fabric.PatternBrush(state.canvas);
      state.diamondPatternBrush = new fabric.PatternBrush(state.canvas);
      // setVLinePatternBrush(state.vLinePatternBrush);
      // setHLinePatternBrush(state.hLinePatternBrush);
      // setSquarePatternBrush(state.squarePatternBrush);
      // setDiamondPatternBrush(state.diamondPatternBrush);
    }
  },
  initOptions(state, payload) {
    if (state.canvas.freeDrawingBrush) {
      state.canvas.freeDrawingBrush.color = payload.drawingColor;
      state.canvas.freeDrawingBrush.width = payload.drawingLineWidth;
      state.canvas.freeDrawingBrush.shadow = new fabric.Shadow(
        payload.shadowInstance,
      );
    }
  },
  changeMode(state) {
    state.canvas.isDrawingMode = !state.canvas.isDrawingMode;
  },
  setDrawingType(state, payload) {
    state.canvas.freeDrawingBrush = new fabric[payload.type + 'Brush'](
      state.canvas,
    );
    // switch (payload.type) {
    //   case 'hline':
    //     state.canvas.freeDrawingBrush = state.hLinePatternBrush;
    //     break;
    //   case 'vline':
    //     state.canvas.freeDrawingBrush = state.vLinePatternBrush;
    //     break;
    //   case 'square':
    //     state.canvas.freeDrawingBrush = state.squarePatternBrush;
    //     break;
    //   case 'diamond':
    //     state.canvas.freeDrawingBrush = state.diamondPatternBrush;
    //     break;
    //   default:
    //     state.canvas.freeDrawingBrush = new fabric[payload.type + 'Brush'](
    //       state.canvas,
    //     );
    // }
    if (state.canvas.freeDrawingBrush) {
      state.canvas.freeDrawingBrush.color = payload.drawingColor;
      state.canvas.freeDrawingBrush.width = payload.drawingLineWidth;
      state.canvas.freeDrawingBrush.shadow = new fabric.Shadow(
        payload.shadowInstance,
      );
    }
  },
  setLineColor(state, payload) {
    state.canvas.freeDrawingBrush.color = payload;
  },
  setShadowColor(state, payload) {
    state.canvas.freeDrawingBrush.shadow.color = payload;
  },
  setLineWidth(state, payload) {
    state.canvas.freeDrawingBrush.width = payload;
  },
  setShadowWidth(state, payload) {
    state.canvas.freeDrawingBrush.shadow.blur = payload;
  },
  setShadowOffet(state, payload) {
    state.canvas.freeDrawingBrush.shadow.offsetX = payload.offsetX;
    state.canvas.freeDrawingBrush.shadow.offsetY = payload.offsetY;
  },
  //
  clearCanvas(state) {
    state.canvas.clear();
    state.canvas.setBackgroundImage(
      this.getters.getPaperType,
      state.canvas.renderAll.bind(state.canvas),
    );
  },
  deleteSelected(state) {
    const activeObjects = state.canvas.getActiveObjects();
    if (activeObjects) {
      activeObjects.forEach(function(object) {
        state.canvas.remove(object);
      });
    }
  },
  changePaper(state, payload) {
    state.pager =
      process.env.VUE_APP_API_URL + `/resources/images/${payload}.png`;
    state.canvas.setBackgroundImage(
      this.getters.getPaperType,
      state.canvas.renderAll.bind(state.canvas),
    );
  },
  //
  addTextItem(state, payload) {
    state.canvas.add(payload).setActiveObject(payload);
  },
  setFontFamily(state, payload) {
    if (state.canvas.getActiveObject()) {
      state.canvas.getActiveObject().set('fontFamily', payload);
      state.canvas.requestRenderAll();
    }
  },
  setFontWeightBold(state) {
    const fw = state.canvas.getActiveObject().get('fontWeight');
    state.canvas
      .getActiveObject()
      .set('fontWeight', fw === 'bold' ? 'normal' : 'bold');
    state.canvas.requestRenderAll();
  },
  setFontItalic(state) {
    const fs = state.canvas.getActiveObject().get('fontStyle');
    state.canvas
      .getActiveObject()
      .set('fontStyle', fs === 'italic' ? 'normal' : 'italic');
    state.canvas.requestRenderAll();
  },
  setFontUnderline(state) {
    state.canvas
      .getActiveObject()
      .set('underline', !state.canvas.getActiveObject().get('underline'));
    state.canvas.requestRenderAll();
  },
  setFontAlignLeft(state) {
    state.canvas.getActiveObject().set('textAlign', 'left');
    state.canvas.requestRenderAll();
  },
  setFontAlignCenter(state) {
    state.canvas.getActiveObject().set('textAlign', 'center');
    state.canvas.requestRenderAll();
  },
  setFontAlignRight(state) {
    state.canvas.getActiveObject().set('textAlign', 'right');
    state.canvas.requestRenderAll();
  },
  setFontSize(state, payload) {
    state.canvas.getActiveObject().set('fontSize', payload);
    state.canvas.requestRenderAll();
  },
  setFontBackgroundColor(state, payload) {
    state.canvas.getActiveObject().set('textBackgroundColor', payload);
    state.canvas.requestRenderAll();
  },
  //
  setItemColor(state, payload) {
    state.canvas.getActiveObject().set('fill', payload);
    state.canvas.requestRenderAll();
  },
  addItem(state, payload) {
    state.canvas.add(payload);
  },
  //
  addSVGStiker(state, payload) {
    fabric.loadSVGFromURL(payload.url, function(objects, options) {
      const loadedObject = fabric.util.groupSVGElements(objects, options);
      loadedObject
        .set({
          left: payload.coord.left,
          top: payload.coord.top,
          angle: payload.angle,
        })
        .setCoords();
      state.canvas.add(loadedObject);
    });
  },
};

export default { state, getters, mutations };
