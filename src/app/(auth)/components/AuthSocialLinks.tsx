import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5';

import { Button } from '@/app/commons/components/ui/button';

export const AuthSocialLinks = () => {
  return (
    <div className="flex items-center gap-2 justify-center w-full">
      <Button variant="outline" className="w-full">
        <IoLogoGoogle size={20} />
      </Button>
      <Button variant="outline" className="w-full">
        <IoLogoGithub size={20} />
      </Button>
    </div>
  );
};
