import React, { useState, useEffect } from 'react';
import './css/Quote.css';

const Quote = () => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // State for conditional areas
  const [selectedAreas, setSelectedAreas] = useState({
    kitchen: false,
    bathroom: false,
    livingRoom: false,
    bedroom: false,
    diningRoom: false,
    basement: false,
    attic: false,
    roof: false,
    exterior: false,
    windowsDoors: false,
    deckPatio: false,
    garden: false,
    driveway: false,
    foundation: false,
    hvac: false,
    electrical: false,
    plumbing: false,
    garage: false,
    pool: false,
    wholeHouse: false,
    other: false
  });

  // "Select All" state
  const [selectAll, setSelectAll] = useState(false);

  // Update selectAll when any area changes
  useEffect(() => {
    const allSelected = Object.values(selectedAreas).every(value => value === true);
    setSelectAll(allSelected);
  }, [selectedAreas]);

  const handleAreaChange = (e) => {
    setSelectedAreas({ ...selectedAreas, [e.target.name]: e.target.checked });
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    const updatedAreas = {};
    Object.keys(selectedAreas).forEach(key => {
      updatedAreas[key] = isChecked;
    });
    setSelectedAreas(updatedAreas);
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setErrorMsg('');
  setPrice('');

  const formData = new FormData(e.target); // includes all files

  try {
    const response = await fetch("https://meroux-backend.onrender.com/send-estimate", {
      method: "POST",
      body: formData, // no Content-Type header – browser sets correct one with boundary
    });

    if (!response.ok) throw new Error("Server error");

    const result = await response.json();

    if (result.reply) setPrice(result.reply);
    else setErrorMsg("No response from AI");

  } catch (err) {
    console.error(err);
    setErrorMsg("Something went wrong");
  }

  setLoading(false);
};

  return (
    <div className="quote-wrapper">
      <div className="quote-container">
        <div className="quote-text">Instant Quote Generator</div>

<p className="quote-description">
  Complete the form below to receive an intelligent, personalized project estimate. Our AI analyzes your project details, property information, budget, timeline, and uploaded plans or photos to generate a fast and accurate preliminary quotation.
</p>

        <form className="quote-form" onSubmit={handleSubmit}>

          {/* ========== AREA SELECTION (checkboxes) ========== */}
          <h3>Which areas are involved? (Select all that apply)</h3>
          <div className="quote-form-row">
            <label>
              <input
                type="checkbox"
                name="selectAll"
                checked={selectAll}
                onChange={handleSelectAll}
              /> Select All
            </label>
            <label><input type="checkbox" name="kitchen" checked={selectedAreas.kitchen} onChange={handleAreaChange} /> Kitchen</label>
            <label><input type="checkbox" name="bathroom" checked={selectedAreas.bathroom} onChange={handleAreaChange} /> Bathroom(s)</label>
            <label><input type="checkbox" name="livingRoom" checked={selectedAreas.livingRoom} onChange={handleAreaChange} /> Living/Family Room</label>
            <label><input type="checkbox" name="bedroom" checked={selectedAreas.bedroom} onChange={handleAreaChange} /> Bedroom(s)</label>
            <label><input type="checkbox" name="diningRoom" checked={selectedAreas.diningRoom} onChange={handleAreaChange} /> Dining Room</label>
            <label><input type="checkbox" name="basement" checked={selectedAreas.basement} onChange={handleAreaChange} /> Basement/Cellar</label>
            <label><input type="checkbox" name="attic" checked={selectedAreas.attic} onChange={handleAreaChange} /> Attic/Loft</label>
            <label><input type="checkbox" name="roof" checked={selectedAreas.roof} onChange={handleAreaChange} /> Roof/Gutters</label>
            <label><input type="checkbox" name="exterior" checked={selectedAreas.exterior} onChange={handleAreaChange} /> Exterior Siding/Paint</label>
            <label><input type="checkbox" name="windowsDoors" checked={selectedAreas.windowsDoors} onChange={handleAreaChange} /> Windows & Doors</label>
            <label><input type="checkbox" name="deckPatio" checked={selectedAreas.deckPatio} onChange={handleAreaChange} /> Deck/Patio</label>
            <label><input type="checkbox" name="garden" checked={selectedAreas.garden} onChange={handleAreaChange} /> Garden/Landscaping</label>
            <label><input type="checkbox" name="driveway" checked={selectedAreas.driveway} onChange={handleAreaChange} /> Driveway/Walkway</label>
            <label><input type="checkbox" name="foundation" checked={selectedAreas.foundation} onChange={handleAreaChange} /> Foundation/Structural</label>
            <label><input type="checkbox" name="hvac" checked={selectedAreas.hvac} onChange={handleAreaChange} /> HVAC/Mechanical</label>
            <label><input type="checkbox" name="electrical" checked={selectedAreas.electrical} onChange={handleAreaChange} /> Electrical/Lighting</label>
            <label><input type="checkbox" name="plumbing" checked={selectedAreas.plumbing} onChange={handleAreaChange} /> Plumbing</label>
            <label><input type="checkbox" name="garage" checked={selectedAreas.garage} onChange={handleAreaChange} /> Garage</label>
            <label><input type="checkbox" name="pool" checked={selectedAreas.pool} onChange={handleAreaChange} /> Pool/Spa</label>
            <label><input type="checkbox" name="wholeHouse" checked={selectedAreas.wholeHouse} onChange={handleAreaChange} /> Whole‑house</label>
            <label><input type="checkbox" name="other" checked={selectedAreas.other} onChange={handleAreaChange} /> Other</label>
          </div>

          {/* ========== PROJECT BASICS (always shown) ========== */}
          <h3>Project Basics</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="projectType" required>
                <option value="">Select Project Type</option>
                <option>New Build</option><option>Extension</option><option>Loft Conversion</option>
                <option>Renovation</option><option>Roofing</option><option>Remodel</option>
                <option>Repair</option><option>Demolition</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="propertyType">
                <option value="">Property Type</option>
                <option>House</option><option>Flat</option><option>Bungalow</option><option>Commercial</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>

          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="propertyUse">
                <option value="">Property Use</option>
                <option>Residential</option><option>Commercial</option><option>Industrial</option><option>Mixed‑use</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="interiorExterior">
                <option value="">Interior / Exterior / Both</option>
                <option>Interior only</option><option>Exterior only</option><option>Both</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>

          <div className="quote-form-row">
            <div className="quote-input-data">
              <textarea name="projectDescription" placeholder="Describe the project in your own words" rows="2"></textarea>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="mainGoal" placeholder="Main goal of the project (e.g., increase value, add space)" rows="2"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>

          {/* ========== SITE & LOCATION ========== */}
          <h3>Site & Location</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <input type="text" name="postcode" placeholder="Postcode / Address" />
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="equipmentAccess">
                <option value="">Equipment access?</option>
                <option>Yes</option><option>No</option><option>Partial</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <input type="text" name="parking" placeholder="Parking for crew" />
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="occupied">
                <option value="">Property occupied?</option>
                <option>Yes</option><option>No</option><option>Partially</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <textarea name="soilConditions" placeholder="Soil / terrain conditions"></textarea>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="hazards" multiple>
                <option value="">Hazards (Ctrl+select)</option>
                <option>Asbestos</option><option>Lead paint</option><option>Mold</option>
                <option>Underground tanks</option><option>None</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="hoaRestrictions">
                <option value="">HOA/community restrictions?</option>
                <option>Yes</option><option>No</option><option>Not sure</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="existingPermits">
                <option value="">Existing permits?</option>
                <option>Yes</option><option>No</option><option>Not sure</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>

          {/* ========== DESIGN & PLANS ========== */}
          <h3>Design & Plans</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="hasPlans">
                <option value="">Have architectural plans?</option>
                <option>Yes</option><option>No</option><option>In progress</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <input type="text" name="plansPreparedBy" placeholder="Who prepared plans?" />
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="plansFinalized">
                <option value="">Plans finalized?</option>
                <option>Yes</option><option>No</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="needDesignHelp">
                <option value="">Need design/engineering help?</option>
                <option>Yes</option><option>No</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <input type="text" name="architecturalStyle" placeholder="Preferred architectural style" />
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <input type="file" name="designInspirations" />
              <div className="quote-underline"></div>
            </div>
          </div>

          {/* ========== MATERIALS (general) ========== */}
          <h3>Materials & Finishes (General)</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="materialQuality">
                <option value="">Quality preference</option>
                <option>Economy</option><option>Standard</option><option>Premium</option><option>Luxury</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <input type="text" name="flooringGeneral" placeholder="Flooring type(s) (per room)" />
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <input type="text" name="countertopGeneral" placeholder="Countertop material" />
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <input type="text" name="cabinetryGeneral" placeholder="Cabinetry style & material" />
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <input type="text" name="roofingGeneral" placeholder="Roofing material" />
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <input type="text" name="sidingGeneral" placeholder="Siding / exterior finish" />
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <textarea name="windowDoorSpecs" placeholder="Window & door specifications"></textarea>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="plumbingFixtures" placeholder="Plumbing fixtures (brands, finish)"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <textarea name="lightingFixtures" placeholder="Lighting fixtures (style, smart features)"></textarea>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="paintFinishes" placeholder="Paint & finishes (brand, sheen, colors)"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="materialsPurchased">
                <option value="">Materials already purchased?</option>
                <option>Yes</option><option>No</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="purchasedDetails" placeholder="If yes, list what & where stored"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>

          {/* ========== LABOR & CONTRACTORS ========== */}
          <h3>Labor & Contractors</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="clientProvidesMaterials">
                <option value="">Will you provide any materials?</option>
                <option>Yes</option><option>No</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="ownSubcontractors" placeholder="Own subcontractors? (contact info)"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="gcManagesTrades">
                <option value="">GC manage all trades?</option>
                <option>Yes</option><option>No</option><option>Partially</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="contractorPullPermits">
                <option value="">Need contractor to pull permits?</option>
                <option>Yes</option><option>No</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <textarea name="specialSafety" placeholder="Special safety requirements"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>

          {/* ========== TIMELINE & BUDGET ========== */}
          <h3>Timeline & Budget</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <input type="date" name="startDate" />
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <input type="date" name="completionDate" />
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="timeframe">
                <option value="">Client Timeframe</option>
                <option>ASAP</option><option>2–4 Weeks</option><option>1–3 Months</option><option>Flexible</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="hardDeadline">
                <option value="">Hard deadline?</option>
                <option>Yes</option><option>No</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="workDays">
                <option value="">Work allowed on weekends?</option>
                <option>Weekdays only</option><option>Weekends allowed</option><option>Both</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <input type="text" name="plannedAbsences" placeholder="Planned absences (dates)" />
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="budget">
                <option value="">Budget Range</option>
                <option>£5k - £20k</option><option>£20k - £50k</option><option>£50k - £100k</option><option>£100k+</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="budgetFlexible">
                <option value="">Budget flexible?</option>
                <option>Yes</option><option>No</option><option>Slightly</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="lineItemEstimate">
                <option value="">Need line‑item estimate?</option>
                <option>Yes</option><option>No</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="paymentPreference">
                <option value="">Payment preference</option>
                <option>Upfront + progress</option><option>Milestone</option><option>Not specified</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="fundingType">
                <option value="">Funding Type</option>
                <option>Cash</option><option>Mortgage</option><option>Insurance</option><option>Finance</option><option>Undecided</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>

          {/* ========== PERMITS & REGULATIONS ========== */}
          <h3>Permits & Regulations</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="permitsObtained">
                <option value="">Permits obtained?</option>
                <option>Yes</option><option>No</option><option>In progress</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="zoningChecked">
                <option value="">Zoning checked?</option>
                <option>Yes</option><option>No</option><option>Not sure</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="historicDistrict">
                <option value="">Historic district?</option>
                <option>Yes</option><option>No</option><option>Not sure</option>
              </select>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="easements" placeholder="Easements / setbacks? (describe)"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <select name="needPermitAssistance">
                <option value="">Need permit assistance?</option>
                <option>Yes</option><option>No</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>

          {/* ========== SPECIAL CONSIDERATIONS ========== */}
          <h3>Special Considerations</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <textarea name="accessibilityNeeds" placeholder="Accessibility needs (ramps, wider doors)"></textarea>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="sustainability" placeholder="Sustainability / green requirements"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <textarea name="securityRequirements" placeholder="Security requirements (gated community, clearances)"></textarea>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="pets" placeholder="Pets on premises? (describe)"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <textarea name="neighborIssues" placeholder="Neighbor issues (boundary disputes, noise)"></textarea>
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <textarea name="siteChallenges" placeholder="Unique site challenges (steep slope, protected trees)"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>

          {/* ========== ADDITIONAL ========== */}
          <h3>Additional</h3>
          <div className="quote-form-row">
            <div className="quote-input-data">
              <input type="text" name="howHeard" placeholder="How did you hear about us?" />
              <div className="quote-underline"></div>
            </div>
            <div className="quote-input-data">
              <select name="comparingContractors">
                <option value="">Comparing multiple contractors?</option>
                <option>Yes</option><option>No</option><option>Not sure</option>
              </select>
              <div className="quote-underline"></div>
            </div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data full-width">
              <textarea name="comments" placeholder="Additional comments or requests" rows="2"></textarea>
              <div className="quote-underline"></div>
            </div>
          </div>



        
          {selectedAreas.kitchen && (
            <>
              <h3>Kitchen Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="kitchenSize" placeholder="Size (sq ft or dimensions)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="kitchenCondition"><option value="">Current condition</option><option>Good</option><option>Fair</option><option>Poor</option><option>Needs repair</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data full-width"><textarea name="kitchenWork" placeholder="What will be done? (full gut, cosmetic, etc.)"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="replaceCabinets"><option value="">Replace cabinets?</option><option>Yes</option><option>No</option><option>Reface only</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="cabinetDetails" placeholder="Cabinet style, material, finish (if yes)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="replaceCountertops"><option value="">Replace countertops?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="countertopMaterial" placeholder="Material (if yes)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="replaceBacksplash"><option value="">Replace backsplash?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="replaceFlooringKitchen"><option value="">Replace flooring?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="flooringTypeKitchen" placeholder="Flooring type (if yes)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="changeLayout"><option value="">Change layout?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="upgradeAppliances"><option value="">Upgrade appliances?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="appliancesList" placeholder="Which appliances?" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="relocatePlumbingKitchen"><option value="">Add/relocate plumbing?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="relocateElectricalKitchen"><option value="">Add/relocate electrical?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="needIsland"><option value="">Need kitchen island?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="islandDetails" placeholder="Island size & features (if yes)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="sinkStyle" placeholder="Preferred sink style" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="faucetFinish" placeholder="Preferred faucet finish" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data full-width"><textarea name="kitchenSpecialFeatures" placeholder="Special features (wine fridge, pot filler, etc.)"></textarea><div className="quote-underline"></div></div></div>
            </>
          )}

          
          {selectedAreas.bathroom && (
            <>
              <h3>Bathroom Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="number" name="bathroomCount" placeholder="Number of bathrooms" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><textarea name="bathroomPerRoom" placeholder="For each bathroom: size & what will be done"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="bathroomCondition"><option value="">Current condition</option><option>Good</option><option>Fair</option><option>Poor</option><option>Needs repair</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><textarea name="bathroomWork" placeholder="Overall work description"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="replaceVanity"><option value="">Replace vanity/cabinets?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="replaceCountertopBath"><option value="">Replace countertop?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="replaceShowerTub"><option value="">Replace shower/tub?</option><option>Yes</option><option>No</option><option>N/A</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="showerTubType" placeholder="Type (shower only/tub/combo)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="replaceToilet"><option value="">Replace toilet?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="replaceFlooringBath"><option value="">Replace flooring?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="flooringTypeBath" placeholder="Flooring type (if yes)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="relocatePlumbingBath"><option value="">Relocate plumbing fixtures?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="doubleVanity"><option value="">Double vanity?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="bidet"><option value="">Bidet or bidet seat?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="faucetTrimFinish" placeholder="Faucet & shower trim finish" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="ventilation"><option value="">Add/improve ventilation?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="heatedFlooring"><option value="">Heated flooring?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="steamSauna"><option value="">Steam shower or sauna?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}


          {selectedAreas.livingRoom && (
            <>
              <h3>Living Room / Family Room Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="livingRoomSize" placeholder="Size (sq ft or dimensions)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="livingRoomCondition"><option value="">Current condition</option><option>Good</option><option>Fair</option><option>Poor</option><option>Needs repair</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data full-width"><textarea name="livingRoomWork" placeholder="What will be done?"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="replaceFlooringLiving"><option value="">Replace flooring?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="flooringTypeLiving" placeholder="Flooring type (if yes)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="paintLiving"><option value="">Paint walls/ceiling?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="paintColorsLiving" placeholder="Paint colors (if yes)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="fireplace"><option value="">Fireplace install/upgrade?</option><option>Yes</option><option>No</option><option>Already have</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="fireplaceType" placeholder="Fireplace type (if yes)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="builtIns"><option value="">Add built‑in shelving/cabinetry?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="modifyWalls"><option value="">Modify walls (open concept)?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="loadBearing"><option value="">If removing wall, is it load‑bearing?</option><option>Yes</option><option>No</option><option>Not sure</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="upgradeLightingLiving"><option value="">Upgrade lighting?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="soundproofingLiving"><option value="">Add soundproofing?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="newWindowsLiving"><option value="">Install new windows/doors?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

          {selectedAreas.bedroom && (
            <>
              <h3>Bedroom Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="number" name="bedroomCount" placeholder="Number of bedrooms" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><textarea name="bedroomPerRoom" placeholder="For each bedroom: size & what will be done"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="bedroomCondition"><option value="">Current condition</option><option>Good</option><option>Fair</option><option>Poor</option><option>Needs repair</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="replaceFlooringBed"><option value="">Replace flooring?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="flooringTypeBed" placeholder="Flooring type (if yes)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="paintBed"><option value="">Paint walls/ceiling?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="paintColorsBed" placeholder="Paint colors (if yes)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="closetUpgrade"><option value="">Closet upgrade?</option><option>Yes</option><option>No</option><option>New</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="closetType" placeholder="Closet type (walk‑in, organizers)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="newWindowsBed"><option value="">New windows?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="ceilingFanBed"><option value="">Ceiling fan/lighting upgrade?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="soundproofingBed"><option value="">Soundproofing?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="ensuiteBath"><option value="">Ensuite bathroom?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

          {selectedAreas.diningRoom && (
            <>
              <h3>Dining Room Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="diningRoomSize" placeholder="Size (sq ft or dimensions)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="diningRoomCondition"><option value="">Current condition</option><option>Good</option><option>Fair</option><option>Poor</option><option>Needs repair</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data full-width"><textarea name="diningRoomWork" placeholder="What will be done?"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="replaceFlooringDining"><option value="">Replace flooring?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="flooringTypeDining" placeholder="Flooring type (if yes)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="paintDining"><option value="">Paint walls/ceiling?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="newLightDining"><option value="">New light fixture/chandelier?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="wainscoting"><option value="">Wainscoting/paneling?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="builtInBuffet"><option value="">Built‑in cabinetry/buffet?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

  
          {selectedAreas.basement && (
            <>
              <h3>Basement / Cellar Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="basementSize" placeholder="Size (sq ft)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="basementState"><option value="">Current state</option><option>Unfinished</option><option>Partially finished</option><option>Finished</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="waterIssues"><option value="">Water issues?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><textarea name="basementWork" placeholder="What will be done?"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="addInsulation"><option value="">Add insulation?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="egressWindows"><option value="">Add egress windows?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="addBathroomBasement"><option value="">Add bathroom?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="addBedroomBasement"><option value="">Add bedroom?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="addKitchenette"><option value="">Add kitchenette/bar?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="ceilingType"><option value="">Ceiling type</option><option>Drywall</option><option>Drop</option><option>None</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="addHvacBasement"><option value="">Add HVAC?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

          {selectedAreas.attic && (
            <>
              <h3>Attic / Loft Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="atticSize" placeholder="Size (sq ft)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="atticState"><option value="">Current state</option><option>Unfinished</option><option>Partially finished</option><option>Finished</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data full-width"><textarea name="atticWork" placeholder="What will be done?"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="addInsulationAttic"><option value="">Add insulation?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="addFlooringAttic"><option value="">Add flooring?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="addSkylights"><option value="">Add windows/skylights?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="addStaircase"><option value="">Add staircase access?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="addHvacAttic"><option value="">Add HVAC?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="convertToBedroom"><option value="">Convert to bedroom/office?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}


          {selectedAreas.roof && (
            <>
              <h3>Roof & Gutters Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><select name="roofTypeDet"><option value="">Roof type</option><option>Flat</option><option>Pitched</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="currentRoofMaterial" placeholder="Current roofing material" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="roofAge" placeholder="Roof age (approx)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="roofWork"><option value="">Work needed</option><option>Repair</option><option>Replace</option><option>Gutters only</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="preferredRoofMaterial" placeholder="Preferred roofing material (if replace)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="underlaymentReplace"><option value="">Underlayment replace?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="gutterGuards"><option value="">Gutter guards?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="skylightsRoof"><option value="">Skylights?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="chimneyFlashing"><option value="">Chimney flashing repair?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

          {selectedAreas.exterior && (
            <>
              <h3>Exterior Siding / Paint Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="currentSiding" placeholder="Current siding material" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="exteriorWork"><option value="">Work needed</option><option>Repair</option><option>Replace</option><option>Paint</option><option>Clean</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="preferredSiding" placeholder="Preferred siding material (if replace)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="paintColorsExterior" placeholder="Paint colors (if paint)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="exteriorSqft" placeholder="Approx exterior sq ft" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="trimRepair"><option value="">Trim/soffit/fascia repair?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="pressureWashing"><option value="">Pressure washing?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}


          {selectedAreas.windowsDoors && (
            <>
              <h3>Windows & Doors Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="number" name="windowsCount" placeholder="Number of windows to replace" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="number" name="doorsCount" placeholder="Number of exterior doors to replace" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="windowType" placeholder="Preferred window type" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="windowMaterial" placeholder="Window frame material" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="doorType" placeholder="Preferred door type" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="energyEfficiency" placeholder="Energy efficiency requirements" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="customSizes"><option value="">Custom sizes?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="stormDoors"><option value="">Storm doors?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

     
          {selectedAreas.deckPatio && (
            <>
              <h3>Deck / Patio Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="deckSize" placeholder="Size (sq ft or dimensions)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="deckExistingNew"><option value="">Existing or new?</option><option>Existing</option><option>New</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="deckWork"><option value="">Work needed</option><option>New</option><option>Repair</option><option>Resurface</option><option>Replace</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="deckMaterial" placeholder="Preferred material" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="railings"><option value="">Railings?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="railingMaterial" placeholder="Material if yes" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="pergola"><option value="">Roof/pergola?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="builtInSeating"><option value="">Built‑in seating/planters?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="outdoorLighting"><option value="">Outdoor lighting?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}


          {selectedAreas.garden && (
            <>
              <h3>Garden / Landscaping Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="gardenSize" placeholder="Area size (sq ft)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><textarea name="gardenWork" placeholder="What will be done?"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="lawnInstall"><option value="">Lawn installation/sod?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="irrigation"><option value="">Irrigation system?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="retainingWalls"><option value="">Retaining walls?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="gardenLighting"><option value="">Outdoor lighting?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="fencing"><option value="">Fencing?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="treesShrubs" placeholder="Trees/shrubs planting (list types)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="mulchStone"><option value="">Mulch/decorative stone?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

 
          {selectedAreas.driveway && (
            <>
              <h3>Driveway / Walkway Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="drivewaySize" placeholder="Size (sq ft or dimensions)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="currentSurface" placeholder="Current surface" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="drivewayWork"><option value="">Work needed</option><option>Repair</option><option>Resurface</option><option>New</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="preferredDrivewayMaterial" placeholder="Preferred material" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="curbing"><option value="">Curbing?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

    
          {selectedAreas.foundation && (
            <>
              <h3>Foundation / Structural Details</h3>
              <div className="quote-form-row"><div className="quote-input-data full-width"><textarea name="foundationIssue" placeholder="What is the issue? (cracks, settling, water)"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="structuralEngineer"><option value="">Structural engineer consulted?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="foundationType"><option value="">Foundation type</option><option>Slab</option><option>Crawlspace</option><option>Basement</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="underpinning"><option value="">Underpinning/piering needed?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="waterproofingFoundation"><option value="">Waterproofing needed?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="existingStructuralDrawings"><option value="">Existing structural drawings?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

       
          {selectedAreas.hvac && (
            <>
              <h3>HVAC / Mechanical Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><select name="hvacWork"><option value="">Work needed</option><option>New</option><option>Replace</option><option>Repair</option><option>Ductwork</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="systemType" placeholder="System type (forced air, heat pump, etc.)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="conditionedSqft" placeholder="Conditioned sq ft" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="ductwork"><option value="">Ductwork install/modify?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="smartThermostat"><option value="">Smart thermostat upgrade?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="zoning"><option value="">Zoning needed?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}


          {selectedAreas.electrical && (
            <>
              <h3>Electrical / Lighting Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><select name="electricalWorkType"><option value="">Work needed</option><option>New wiring</option><option>Panel upgrade</option><option>Lighting</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="panelUpgrade" placeholder="Panel upgrade to ___ amps (if any)" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="additionalOutlets"><option value="">Additional outlets?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="ceilingFans" placeholder="Ceiling fans? number" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="recessedLighting" placeholder="Recessed lighting? number" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="exteriorLightingElec"><option value="">Exterior lighting?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="smartHomeWiring"><option value="">Smart home wiring?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}


          {selectedAreas.plumbing && (
            <>
              <h3>Plumbing Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><select name="plumbingWork"><option value="">Work needed</option><option>Repair</option><option>Re‑pipe</option><option>Fixture replacement</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="waterHeater"><option value="">Water heater replace?</option><option>Yes (tank)</option><option>Yes (tankless)</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><textarea name="relocatePlumbing" placeholder="Relocate plumbing? (describe)"></textarea><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="sewerLine"><option value="">Sewer line repair/replace?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="sumpPump"><option value="">Sump pump install?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="waterSoftener"><option value="">Water softener?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

      
          {selectedAreas.garage && (
            <>
              <h3>Garage Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="garageSize" placeholder="Size (car capacity)" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="garageWork"><option value="">Work needed</option><option>New construction</option><option>Door</option><option>Insulation</option><option>Flooring</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="garageDoor"><option value="">Garage door replace?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="garageDoorDetails" placeholder="Material/opener if yes" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="insulationDrywall"><option value="">Insulation/drywall?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="floorCoating"><option value="">Floor coating?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="garageElectrical"><option value="">Electrical/lighting upgrade?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

       
          {selectedAreas.pool && (
            <>
              <h3>Pool / Spa Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><select name="poolType"><option value="">Type</option><option>In‑ground</option><option>Above‑ground</option><option>Spa</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="poolWork"><option value="">Work needed</option><option>New</option><option>Renovation</option><option>Equipment</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="poolDeck"><option value="">Pool deck?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="poolDeckMaterial" placeholder="Material if yes" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="poolEquipment"><option value="">Pool equipment (filter/heater/pump)?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="poolLighting"><option value="">Pool lighting?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="safetyFencing"><option value="">Safety fencing?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

   
          {selectedAreas.wholeHouse && (
            <>
              <h3>Whole‑house Details</h3>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="wholeHouseSqft" placeholder="Square footage" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><input type="text" name="yearBuilt" placeholder="Year built" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="wholeHouseWork"><option value="">Work needed</option><option>Full gut</option><option>Interior only</option><option>Exterior only</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="hvacThroughout"><option value="">New HVAC throughout?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="electricalThroughout"><option value="">New electrical throughout?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="plumbingThroughout"><option value="">New plumbing throughout?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="windowsDoorsThroughout"><option value="">New windows/doors throughout?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="roofingThroughout"><option value="">New roofing?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><select name="sidingThroughout"><option value="">New siding?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="interiorFinishesThroughout"><option value="">Interior finishes throughout?</option><option>Yes</option><option>No</option></select><div className="quote-underline"></div></div></div>
            </>
          )}

          {selectedAreas.other && (
            <>
              <h3>Other Area Details</h3>
              <div className="quote-form-row"><div className="quote-input-data full-width"><input type="text" name="otherAreaName" placeholder="Specify the area" /><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data full-width"><textarea name="otherWork" placeholder="Describe work needed"></textarea><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data"><input type="text" name="otherSize" placeholder="Size / dimensions" /><div className="quote-underline"></div></div>
              <div className="quote-input-data"><select name="otherCondition"><option value="">Current condition</option><option>Good</option><option>Fair</option><option>Poor</option><option>Needs repair</option></select><div className="quote-underline"></div></div></div>
              <div className="quote-form-row"><div className="quote-input-data full-width"><textarea name="otherSpecial" placeholder="Any special requirements"></textarea><div className="quote-underline"></div></div></div>
            </>
          )}

        
          <h3>Upload Documents (Optional)</h3>
          <div className="quote-form-row">
            <div className="quote-input-data"><input type="file" name="photos" /><div className="quote-underline"></div><small>Photos of current space</small></div>
            <div className="quote-input-data"><input type="file" name="drawings" /><div className="quote-underline"></div><small>Architectural drawings/sketches</small></div>
          </div>
          <div className="quote-form-row">
            <div className="quote-input-data"><input type="file" name="materialsInspo" /><div className="quote-underline"></div><small>Material selections/inspiration</small></div>
            <div className="quote-input-data"><input type="file" name="permitsDocs" /><div className="quote-underline"></div><small>Existing permits/survey documents</small></div>
          </div>

          <div className="quote-form-row quote-submit-btn centered">    
            <div className="quote-input-data full-width">
              <input type="submit" value={loading ? "Generating..." : "Submit"} disabled={loading} />
            </div>
          </div>

        </form>

        {loading && <p>Please wait...</p>}
        {price && (
          <div className="ai-response">
            <h3>Estimated Price: £{Number(price).toLocaleString()}</h3>
          </div>
        )}
        {errorMsg && <p style={{color:"red"}}>{errorMsg}</p>}

      </div>
    </div>
  );
};

export default Quote;