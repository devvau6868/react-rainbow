import GlobalHeader from './../library/exampleComponents/GlobalHeader';
import CodeEditor from './pages/components/CodeEditor';
import FeatureList from './pages/components/FeatureList';
import ExperienceExamplesPage from './pages/ExperienceExamplesPage';
import GettingStartedPage from './pages/GettingStartedPage';
import Designs from './pages/Designs';
import RainbowComponents from './pages/Designs/RainbowComponents';
import Administration from './pages/Designs/Administration';
import Authentication from './pages/Designs/Authentication';
import Chat from './pages/Designs/Chat';
import ComingSoon from './pages/Designs/ComingSoon';
import NotFound404 from './pages/Designs/NotFound404';
import CreateProfile from './pages/Designs/CreateProfile';
import Team from './pages/Designs/Team';
import SocialIconsSet from './pages/Designs/SocialIconsSet';
import StartupIcon from './exampleComponents/Icons/startup';
import DesignIcon from './exampleComponents/Icons/design';
import PhotographerIcon from './exampleComponents/Icons/photographer';
import CodeIcon from './exampleComponents/Icons/code';
import UserSignUpIcon from './exampleComponents/Icons/userSignup';
import UserVerifiedIcon from './exampleComponents/Icons/userPhoneVerified';
import UserFirstPostIcon from './exampleComponents/Icons/userFirstPost';
import Users from './data/users';

global.GlobalHeader = GlobalHeader;
global.CodeEditor = CodeEditor;
global.FeatureList = FeatureList;
global.ExperienceExamplesPage = ExperienceExamplesPage;
global.GettingStartedPage = GettingStartedPage;
global.Designs = Designs;
global.RainbowComponents = RainbowComponents;
global.Administration = Administration;
global.Authentication = Authentication;
global.Chat = Chat;
global.ComingSoon = ComingSoon;
global.NotFound404 = NotFound404;
global.CreateProfile = CreateProfile;
global.Team = Team;
global.SocialIconsSet = SocialIconsSet;
global.LIBRARY_GOOGLE_MAPS_APIKEY = process.env.REACT_APP_GOOGLE_MAPS_APIKEY;
global.LIBRARY_RECAPTCHA_APIKEY = process.env.REACT_APP_RECAPTCHA_APIKEY;
global.StartupIcon = StartupIcon;
global.PhotographerIcon = PhotographerIcon;
global.DesignIcon = DesignIcon;
global.CodeIcon = CodeIcon;
global.UserSignUpIcon = UserSignUpIcon;
global.UserVerifiedIcon = UserVerifiedIcon;
global.UserFirstPostIcon = UserFirstPostIcon;
global.Users = Users;
