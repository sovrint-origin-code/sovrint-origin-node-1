import { SignalPulse } from './modules/SignalPulse.js';
import { CollapseMapper } from './modules/CollapseMapper.js';
import { CorrectionLoop } from './modules/CorrectionLoop.js';
import { RootCertManager } from './modules/RootCertManager.js';
import { AuditNode } from './modules/AuditNode.js';
import { GraphRenderer } from './modules/GraphRenderer.js';
import { TokenValidator } from './modules/TokenValidator.js';

const signal = SignalPulse(33, 2.1);
const collapse = CollapseMapper("Layer-3", "Distortion");
const override = CorrectionLoop([1.2, 2.4, 3.6]);
const cert = RootCertManager("Katrina Pietroniro", "Montreal, Quebec, Canada");
const audit = AuditNode("Institutional breach detected");
const graph = GraphRenderer("f = c / λ", "3Hz–70Hz");
const token = TokenValidator("SOVRINT.KatrinaPietroniro.root");

const dashboard = {
  signal,
  collapse,
  override,
  cert,
  audit,
  graph,
  token
};

console.log("🛡️ SOVRINT Dashboard Activated:");
console.table(dashboard);
