import { motion } from "framer-motion"
import { Mail ,Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-sky-500 p-1 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <a href="https://meu.edu.in/chancellor-brigade/">
            <div className="bg-black rounded-lg p-4">
              <h3 className="text-2xl font-bold mb-2">MU CodeStorm</h3>
              <p className="text-sm text-gray-300">Organized by Chancellor's Brigade</p>
            </div>
            </a>
          </motion.div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <SocialIcon icon={<Mail />} link="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJGGqkPCSdkLhkvLpxBGqFTGjKdQzmTsZcCklkQtjHLVVwwzFbhdSXwVXmmKgnsNGdcgV" />
            {/* <SocialIcon icon={<Twitter />} link="https://twitter.com/yourpage" /> */}
            <SocialIcon icon={<Instagram />} link="https://www.instagram.com/chancellorbrigadeofficial" />
            {/* <SocialIcon icon={<Linkedin />} link="https://www.linkedin.com/in/yourpage" /> */}
            {<SocialIcon icon={<Youtube />} link="https://www.youtube.com/@mandsauruniversityofficial7771" />}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2025 MU CodeStorm. All rights reserved.
        </div>
        
      </div>
    </footer>
  )
}

const SocialIcon = ({ icon, link }: { icon: JSX.Element, link: string }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400 transition duration-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
)
