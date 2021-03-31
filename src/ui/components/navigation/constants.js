import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
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
    title: "Settings",
    icon: <SettingsIcon />,
    permanent: true,
  },
  {
    title: "About",
    icon: <InfoIcon />,
    permanent: true,
  },
];
