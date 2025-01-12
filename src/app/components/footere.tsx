import Link from "next/link";
export default function Footer () {
    return (
        <div className="footerfirst">
            <div className="footersecond">
                <ul>
                    <li> Made By Aliya Manzoor </li>
                    <li> <Link href={"https://github.com/ZuhiiMalakShah/Milestone-2-Assignments"}> Github </Link>  </li>
                </ul>
            </div>
        </div>
    );
}
