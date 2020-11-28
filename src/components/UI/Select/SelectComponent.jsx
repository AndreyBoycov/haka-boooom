import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import {FormControl} from "@material-ui/core";
import styles from "./SelectComponent.module.css";

const SelectComponent = (props) => {
    const {
        list,
        onSelect,
        label=''
    } = props;
    const [ selectedPosition, setSelectedPosition ] = useState('');

    const selectPosition = (_, selectPosition) => {
        setSelectedPosition(selectPosition.props.value);
        onSelect(selectPosition.props.value);
    };

    const renderList = () => {
        return list.map(row => (
            <MenuItem value={row}>{row.name}</MenuItem>
        ));
    };

    return (
        <FormControl className={styles.select}>
            <InputLabel htmlFor="label">{label}</InputLabel>
            <Select
                autoWidth={true}
                value={selectedPosition.name}
                onChange={selectPosition}
            >
                <MenuItem value={({})}>
                    <em>None</em>
                </MenuItem>
                { renderList() }
            </Select>
        </FormControl>
    );
};

export default SelectComponent;