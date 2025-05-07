
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="text-white relative group md:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="absolute -inset-0.5 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </Button>
  );
};

export default MobileMenuButton;
