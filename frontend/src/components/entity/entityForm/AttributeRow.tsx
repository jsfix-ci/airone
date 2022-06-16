import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import GroupIcon from "@mui/icons-material/Group";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Input,
  MenuItem,
  Select,
  TableCell,
  Theme,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React, { FC, useMemo } from "react";
import { Link } from "react-router-dom";

import { aclPath } from "Routes";
import { Entity, EntityUpdate } from "apiclient/autogenerated";
import { AutoCompletedField } from "components/common/AutoCompletedField";
import { AttributeTypes } from "utils/Constants";

const useStyles = makeStyles<Theme>((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#607D8B0A",
  },
}));

interface Props {
  index?: number;
  currentAttr?: { [key: string]: any };
  allAttrs: { [key: string]: any }[];
  referralEntities: Entity[];
  entityInfo: EntityUpdate;
  setEntityInfo: (entityInfo: EntityUpdate) => void;
}

export const AttributeRow: FC<Props> = ({
  index,
  currentAttr,
  allAttrs,
  referralEntities,
  entityInfo,
  setEntityInfo,
}) => {
  const classes = useStyles();

  const handleAppendAttribute = (nextTo) => {
    allAttrs.splice(nextTo + 1, 0, {
      name: "",
      type: AttributeTypes.string.type,
      is_mandatory: false,
      is_delete_in_chain: false,
      referral: [],
    });
    setEntityInfo({ ...entityInfo, attrs: [...allAttrs] });
  };

  const handleDeleteAttribute = (index: number) => {
    allAttrs[index] = {
      ...allAttrs[index],
      isDeleted: true,
    };
    setEntityInfo({ ...entityInfo, attrs: [...allAttrs] });
  };

  const attributeTypeMenuItems = useMemo(() => {
    return Object.keys(AttributeTypes).map((typename, index) => (
      <MenuItem key={index} value={AttributeTypes[typename].type}>
        {AttributeTypes[typename].name}
      </MenuItem>
    ));
  }, []);

  const handleChangeAttributeValue = (
    index: number,
    key: string,
    value: any
  ) => {
    allAttrs[index][key] = value;
    setEntityInfo({ ...entityInfo, attrs: [...allAttrs] });
  };

  return (
    <StyledTableRow>
      <TableCell>
        {index !== undefined && (
          <Input
            type="text"
            value={currentAttr.name}
            placeholder="属性名"
            sx={{ width: "100%" }}
            onChange={(e) =>
              handleChangeAttributeValue(index, "name", e.target.value)
            }
            error={currentAttr.name === ""}
          />
        )}
      </TableCell>

      <TableCell>
        {index !== undefined && (
          <Box>
            <Box minWidth={100} marginX={1}>
              <Select
                fullWidth={true}
                value={currentAttr.type}
                disabled={currentAttr.id != null}
                onChange={(e) =>
                  handleChangeAttributeValue(index, "type", e.target.value)
                }
              >
                {attributeTypeMenuItems}
              </Select>
            </Box>
            {(currentAttr.type & AttributeTypes.object.type) > 0 && (
              <Box minWidth={100} marginX={1}>
                <Typography>エンティティを選択</Typography>

                <AutoCompletedField
                  options={referralEntities}
                  getOptionLabel={(option: Entity) => option.name}
                  defaultValue={referralEntities.filter((e) =>
                    currentAttr.referral.includes(e.id)
                  )}
                  handleChangeSelectedValue={(value: Entity[]) => {
                    handleChangeAttributeValue(
                      index,
                      "referral",
                      value.map((i) => i.id)
                    );
                  }}
                />
              </Box>
            )}
          </Box>
        )}
      </TableCell>

      <TableCell>
        {index !== undefined && (
          <Checkbox
            checked={currentAttr.is_mandatory}
            onChange={(e) =>
              handleChangeAttributeValue(
                index,
                "is_mandatory",
                e.target.checked
              )
            }
          />
        )}
      </TableCell>

      <TableCell>
        {index !== undefined && (
          <Checkbox
            checked={currentAttr.is_delete_in_chain}
            onChange={(e) =>
              handleChangeAttributeValue(
                index,
                "is_delete_in_chain",
                e.target.checked
              )
            }
          />
        )}
      </TableCell>

      <TableCell>
        {index !== undefined && (
          <>
            <IconButton className={classes.button}>
              <ArrowUpwardIcon />
            </IconButton>

            <IconButton className={classes.button}>
              <ArrowDownwardIcon />
            </IconButton>
          </>
        )}
      </TableCell>

      <TableCell>
        {index !== undefined && (
          <IconButton
            className={classes.button}
            onClick={(e) => handleDeleteAttribute(index)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        )}
      </TableCell>

      {/* This is a button to add new Attribute */}
      <TableCell>
        <IconButton
          className={classes.button}
          onClick={() => handleAppendAttribute(index)}
        >
          <AddIcon />
        </IconButton>
      </TableCell>

      <TableCell>
        {index !== undefined && (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<GroupIcon />}
            component={Link}
            to={aclPath(currentAttr.id)}
            disabled={currentAttr.id == null}
          >
            ACL
          </Button>
        )}
      </TableCell>
    </StyledTableRow>
  );
};
