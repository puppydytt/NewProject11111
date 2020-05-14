import React from "react";
import Settings from "./settings";
import {connect} from "react-redux"


const SettingsContainer = connect()(Settings)

export default SettingsContainer;