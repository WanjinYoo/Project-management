<div className={classes.root}>
    <List component="nav" aria-label="Device settings">
        <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem3}
        >
            <ListItemText
                primary="Select Priority Level"
                secondary={pData[selectedIndexff3]}
            />
        </ListItem>
    </List>
    <Menu
        id="lock-menu"
        anchorE2={anchorE2}
        keepMounted
        open={Boolean(anchorE2)}
        onClose={handleClose3}
    >
        {pData.map((option, indexff) => (
            <MenuItem
                key={option}
                selected={indexff === selectedIndexff3}
                onClick={event => handleMenuItemClick3(event, indexff)}
            >
                {option}
            </MenuItem>
        ))}
    </Menu>
</div>;
const pData = ["Low", "Medium", "High", "Urgent"];
const handleClickListItem3 = event => {
    setAnchorE2(event.currentTarget);
};
const [anchorE2, setAnchorE2] = useState(null);
const [selectedIndexff3, setSelectedIndexff3] = useState(1);

const handleMenuItemClick3 = (event, indexff) => {
    setSelectedIndexff3(indexff);
    setData({ ...values, receiver_email: indexff + 1 });
    setAnchorE2(null);
};

const handleClose3 = () => {
    setAnchorE2(null);
};
