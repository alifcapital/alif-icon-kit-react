import { render } from '@testing-library/react';
import React from 'react';

import EyeOff from '../src/SystemIcons/EyeOff';
import EyeOn from '../src/SystemIcons/EyeOn';
import Search from '../src/SystemIcons/Search';
import Bill from '../src/SystemIcons/Bill';
import Calendar from '../src/SystemIcons/Calendar';
import Chat from '../src/SystemIcons/Chat';
import Check from '../src/SystemIcons/Check';
import Clock from '../src/SystemIcons/Clock';
import Close from '../src/SystemIcons/Close';
import Copy from '../src/SystemIcons/Copy';
import Delete from '../src/SystemIcons/Delete';
import Doc from '../src/SystemIcons/Doc';
import DocEmpty from '../src/SystemIcons/DocEmpty';
import Edit from '../src/SystemIcons/Edit';
import Expand from '../src/SystemIcons/Expand';
import EyeOffAlt from '../src/SystemIcons/EyeOffAlt';
import GridView from '../src/SystemIcons/GridView';
import HelpCircle from '../src/SystemIcons/HelpCircle';
import Home from '../src/SystemIcons/Home';
import Info from '../src/SystemIcons/Info';
import Link from '../src/SystemIcons/Link';
import ListView from '../src/SystemIcons/ListView';
import Lock from '../src/SystemIcons/Lock';
import Mail from '../src/SystemIcons/Mail';
import MapPin from '../src/SystemIcons/MapPin';
import Menu from '../src/SystemIcons/Menu';
import Move from '../src/SystemIcons/Move';
import Navigation from '../src/SystemIcons/Navigation';
import PaperClip from '../src/SystemIcons/Paperclip';
import PlusRect from '../src/SystemIcons/PlusRect';
import Plus from '../src/SystemIcons/Plus';
import RefreshCw from '../src/SystemIcons/RefreshCw';
import Refresh from '../src/SystemIcons/Refresh';
import Repeat from '../src/SystemIcons/Repeat';
import Settings from '../src/SystemIcons/Settings';
import Slash from '../src/SystemIcons/Slash';
import Star from '../src/SystemIcons/Star';
import Tune from '../src/SystemIcons/Tune';
import Unlock from '../src/SystemIcons/Unlock';
import ArrowDown from '../src/NavigationIcons/ArrowDown';
import ArrowUp from '../src/NavigationIcons/ArrowUp';
import LeftArrow from '../src/NavigationIcons/LeftArrow';
import RightArrow from '../src/NavigationIcons/RightArrow';
import ChevronDown from '../src/NavigationIcons/ChevronDown';
import ChevronLeft from '../src/NavigationIcons/ChevronLeft';
import ChevronRight from '../src/NavigationIcons/ChevronRight';
import ChevronUp from '../src/NavigationIcons/ChevronUp';
import LedtDown from '../src/NavigationIcons/LedtDown';
import RightTop from '../src/NavigationIcons/RightTop';
import TrendingUp from '../src/NavigationIcons/TrendingUp';
import Zp from '../src/FinanceIcons/Zp';
import Analytics from '../src/FinanceIcons/Analytics';
import Bank from '../src/FinanceIcons/Bank';
import CardSalom from '../src/FinanceIcons/CardSalom';
import Cash from '../src/FinanceIcons/Cash';
import CreditCard from '../src/FinanceIcons/CreditCard';
import CurrencyDollar from '../src/FinanceIcons/CurrencyDollar';
import CurrencyLira from '../src/FinanceIcons/CurrencyLira';
import CurrencyRuble from '../src/FinanceIcons/CurrencyRuble';
import Dollar from '../src/FinanceIcons/Dollar';
import Merch from '../src/FinanceIcons/Merch';
import Money from '../src/FinanceIcons/Money';
import Online from '../src/FinanceIcons/Online';
import Percent from '../src/FinanceIcons/Percent';
import SendCard from '../src/FinanceIcons/SendCard';
import SendDoc from '../src/FinanceIcons/SendDoc';
import Terminal from '../src/FinanceIcons/Terminal';
import Transfers from '../src/FinanceIcons/Transfers';
import Visa from '../src/FinanceIcons/Visa';
import WalletPlus from '../src/FinanceIcons/WalletPlus';
import WalletTransfer from '../src/FinanceIcons/WalletTransfer';
import Wallet from '../src/FinanceIcons/Wallet';

import BonusLarge from '../src/MapIcons/BonusLarge';
import BonusMedium from '../src/MapIcons/BonusMedium';
import BonusSmall from '../src/MapIcons/BonusSmall';
import CashoutLarge from '../src/MapIcons/CashoutLarge';
import CashoutMedium from '../src/MapIcons/CashoutMedium';
import CashoutSmall from '../src/MapIcons/CashoutSmall';
import CheckCircle from '../src/MapIcons/Check';
import CloseCircle from '../src/MapIcons/Close';
import DontWorkLarge from '../src/MapIcons/DontWorkLarge';
import DontWorkMedium from '../src/MapIcons/DontWorkMedium';
import DontWorkSmall from '../src/MapIcons/DontWorkSmall';
import TerminalLarge from '../src/MapIcons/TerminalLarge';
import TerminalMedium from '../src/MapIcons/TerminalMedium';
import TerminalSmall from '../src/MapIcons/TerminalSmall';
import Clothing from '../src/SalomIcons/Clothing';
import ConstructionMaterials from '../src/SalomIcons/ConstructionMaterials';
import Food from '../src/SalomIcons/Food';
import Fridge from '../src/SalomIcons/Fridge';
import Jewelry from '../src/SalomIcons/Jewelry';
import PhonesAndAccessories from '../src/SalomIcons/PhonesAndAccessories';
import Furniture from '../src/SalomIcons/Furniture';
import OneSomoni from '../src/DepositIcons/OneSomoni';
import DepositReplenishment from '../src/DepositIcons/DepositReplenishment';
import IncomeSharing from '../src/DepositIcons/IncomeSharing';
import Insurance from '../src/DepositIcons/Insurance';
import Investments from '../src/DepositIcons/Investments';
import Npl from '../src/DepositIcons/Npl';
import BuyCar from '../src/AutoCreditIcons/BuyCar';
import DocumentExecution from '../src/AutoCreditIcons/DocumentExecution';
import Form from '../src/AutoCreditIcons/Form';
import AutoCreditMoney from '../src/AutoCreditIcons/Money';
import Time from '../src/AutoCreditIcons/Time';
import Valuation from '../src/AutoCreditIcons/Valuation';
import VKontakte from '../src/SocialNetworkIcons/VKontakte';
import LinkedIn from '../src/SocialNetworkIcons/LinkedIn';
import Facebook from '../src/SocialNetworkIcons/Facebook';
import Telegram from '../src/SocialNetworkIcons/Telegram';
import Instagram from '../src/SocialNetworkIcons/Instagram';
import Odnoklassniki from '../src/SocialNetworkIcons/Odnoklassniki';
import Twitter from '../src/SocialNetworkIcons/Twitter';
import YouTube from '../src/SocialNetworkIcons/YouTube';
import AppleAppStore from '../src/AppStoreIcons/AppleAppStore';
import GooglePlay from '../src/AppStoreIcons/GooglePlay';

const IconsWithProps = [
  EyeOff,
  EyeOn,
  Search,
  Bill,
  Calendar,
  Chat,
  Check,
  Clock,
  Close,
  Copy,
  Delete,
  Doc,
  DocEmpty,
  Edit,
  Expand,
  EyeOffAlt,
  GridView,
  HelpCircle,
  Home,
  Info,
  Link,
  ListView,
  Lock,
  Mail,
  MapPin,
  Menu,
  Move,
  Navigation,
  PaperClip,
  PlusRect,
  Plus,
  RefreshCw,
  Refresh,
  Repeat,
  Settings,
  Slash,
  Star,
  Tune,
  Unlock,
  ArrowDown,
  ArrowUp,
  LeftArrow,
  RightArrow,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  LedtDown,
  RightTop,
  TrendingUp,
  Zp,
  Analytics,
  Bank,
  CardSalom,
  Cash,
  CreditCard,
  CurrencyDollar,
  CurrencyLira,
  CurrencyRuble,
  Dollar,
  Merch,
  Money,
  Online,
  Percent,
  SendCard,
  SendDoc,
  Terminal,
  Transfers,
  Visa,
  WalletPlus,
  WalletTransfer,
  Wallet,
];

const IconsWithoutProps = [
  BonusLarge,
  BonusMedium,
  BonusSmall,
  CashoutLarge,
  CashoutMedium,
  CashoutSmall,
  CheckCircle,
  CloseCircle,
  DontWorkLarge,
  DontWorkMedium,
  DontWorkSmall,
  TerminalLarge,
  TerminalMedium,
  TerminalSmall,
  Clothing,
  ConstructionMaterials,
  Food,
  Fridge,
  Jewelry,
  PhonesAndAccessories,
  Furniture,
  OneSomoni,
  DepositReplenishment,
  IncomeSharing,
  Insurance,
  Investments,
  Npl,
  BuyCar,
  DocumentExecution,
  Form,
  AutoCreditMoney,
  Time,
  Valuation,
  VKontakte,
  LinkedIn,
  Facebook,
  Telegram,
  Instagram,
  Odnoklassniki,
  Twitter,
  YouTube,
  AppleAppStore,
  GooglePlay,
];

describe('Render', () => {
  const IconsArr = [...IconsWithProps, ...IconsWithoutProps];

  for (const Icon of IconsArr) {
    it('should rendered', async () => {
      const { container } = render(<Icon />);

      expect(container.querySelectorAll('svg')).toHaveLength(1);
    });
  }
});

describe('Props', () => {
  for (const Icon of IconsWithProps) {
    it('should change height size', () => {
      const { container } = render(<Icon height="100" />);

      expect(container.querySelectorAll("[height='100']")).toHaveLength(1);
    });
    it('should change width size', () => {
      const { container } = render(<Icon width="100" />);

      expect(container.querySelectorAll("[width='100']")).toHaveLength(1);
    });
    it('should change color', () => {
      const { container } = render(<Icon color="red" />);

      const stroke = container.querySelectorAll("[stroke='red']");
      const fill = container.querySelectorAll("[fill='red']");

      if (stroke.length && fill.length) {
        return expect([...stroke, ...fill].length).not.toEqual(0);
      }
      if (stroke.length) {
        return expect(stroke.length).not.toEqual(0);
      }
      if (fill.length) {
        return expect(fill.length).not.toEqual(0);
      } else {
        expect(0).toEqual(1);
      }
    });
  }
});
