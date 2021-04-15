import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";

export const navigationItems = [
  {
    title: "Notes",
    icon: <AssignmentIcon />,
    permanent: false,
  },
  {
    title: "Trash",
    icon: <DeleteIcon />,
    permanent: false,
  },
  {
    title: "About",
    icon: <InfoIcon />,
    permanent: true,
  },
];
