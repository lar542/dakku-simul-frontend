import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faEraser,
  faTrashAlt,
  faBold,
  faItalic,
  faUnderline,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faCircle,
  faSquareFull,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEraser,
  faTrashAlt,
  faBold,
  faItalic,
  faUnderline,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faCircle,
  faSquareFull,
  faTimes,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
