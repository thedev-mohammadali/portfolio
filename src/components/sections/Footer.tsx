import { Heart } from "lucide-react";

import { footer } from "../../data/footer";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="border-border border-t">
      <Container>
        <div className="flex flex-col items-center gap-4 py-10 text-center">
          <div>
            <h3 className="text-foreground text-xl font-semibold">
              {footer.name}
            </h3>

            <p className="text-muted-foreground mt-1">{footer.role}</p>
          </div>

          <p className="text-muted-foreground text-sm">{footer.copyright}</p>

          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            {footer.builtWith}

            <Heart size={14} className="fill-primary text-primary" />
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
