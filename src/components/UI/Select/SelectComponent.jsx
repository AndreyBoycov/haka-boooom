import React, {useState} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import {FormControl} from "@material-ui/core";

const SelectComponent = (props) => {
    const {
        list,
        selectedValue,
        onSelect,
        label=''
    } = props;
    const [ selectedPosition, setSelectedPosition ] = useState(selectedValue);

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
        <FormControl style={{minWidth: '100%'}}>
            <InputLabel htmlFor="label">{label}</InputLabel>
            <Select
                autoWidth={true}
                value={selectedPosition}
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