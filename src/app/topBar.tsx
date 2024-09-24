import { faGlobe, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TopBar() {
  const language = 'عربي';
  const headerContacts = {
    email: 'info@wassera.com.sa',
    phone: '+966 59 857 7775',
  };
  return (
    <header className="top-header">
      {/*  TODO : FIX RESPONSIVE */}
      <div className="hidden md:flex max-w-7xl mx-auto lg:pr-28 py-2 flex flex-row-reverse gap-5 text-xs text-gray-500">
        <div className="flex items-center gap-2 px-2 border-l-2 border-gray-300">
          <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />
          <span>{language}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className=" w-4 h-4" />
          <span>{headerContacts.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
          <span>{headerContacts.phone}</span>
        </div>
      </div>
    </header>
  );
}
